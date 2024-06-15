const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts, reactions } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to database");
  try {
    // Clear the database of existing data
    console.log("Attempting to clear database...");
    let checkForUsers = await connection.db
      .listCollections({ name: "users" })
      .toArray();
    if (checkForUsers.length) {
      await connection.db.dropCollection("users");
      console.log("Users collection dropped");
    }
    let checkForThoughts = await connection.db
      .listCollections({ name: "thoughts" })
      .toArray();
    if (checkForThoughts.length) {
      await connection.db.dropCollection("thoughts");
      console.log("Thoughts collection dropped");
    }
    console.log("Attempting to seed database...");

    // Seed user data
    const newUsers = await User.insertMany(users);
    console.log("Seeded new user data successfully");

    // Format data for table
    const userOutput = newUsers.map((user) => ({
      _id: user._id,
      username: user.username,
      email: user.email,
      thoughts: user.thoughts,
      friends: user.friends,
    }));
    console.table(userOutput);

    // Seed thought data
    const newThoughts = await Thought.insertMany(thoughts);
    console.log("Seeded new thought data successfully");

    // Format data for table
    const thoughtOutput = newThoughts.map((thought) => ({
      _id: thought._id,
      thoughtText: thought.thoughtText,
      username: thought.username,
      userId: thought.userId,
      reactions: thought.reactions,
    }));
    console.table(thoughtOutput);

    // Update user data with thoughts
    for (let i = 0; i < newThoughts.length; i++) {
      const thought = newThoughts[i];
      const user = newUsers.find((user) => user.username === thought.username);
      user.thoughts.push(thought._id);
      await user.save();
    }
    console.log("Assigned random thoughts to each user");

    // Format data for table
    const updatedUserOutput = newUsers.map((user) => ({
      _id: user._id,
      username: user.username,
      thoughts: user.thoughts,
    }));
    console.table(updatedUserOutput);

    // Update user data with 2 random friends
    for (let i = 0; i < newUsers.length; i++) {
      const user = newUsers[i];
      let randomIndex1, randomIndex2;
      do {
        randomIndex1 = Math.floor(Math.random() * newUsers.length);
        randomIndex2 = Math.floor(Math.random() * newUsers.length);
      } while (
        randomIndex1 === randomIndex2 ||
        randomIndex1 === i ||
        randomIndex2 === i
      );
      const friend1 = newUsers[randomIndex1];
      const friend2 = newUsers[randomIndex2];
      user.friends.push(friend1._id, friend2._id);
      await user.save();
    }
    console.log("Assigned 2 random friends to each user");

    // Format data for table
    const friendsOutput = newUsers.map((user) => ({
      _id: user._id,
      username: user.username,
      friends: user.friends,
    }));
    console.table(friendsOutput);

    // Update thought data with reactions
    for (let i = 0; i < newThoughts.length; i++) {
      const thought = newThoughts[i];
      let randomIndex1, randomIndex2;
      do {
        randomIndex1 = Math.floor(Math.random() * reactions.length);
        randomIndex2 = Math.floor(Math.random() * reactions.length);
      } while (randomIndex1 === randomIndex2);
      const reaction1 = reactions[randomIndex1];
      const reaction2 = reactions[randomIndex2];
      if (thought.username !== reaction1.username) {
        thought.reactions.push(reaction1);
      }
      if (thought.username !== reaction2.username) {
        thought.reactions.push(reaction2);
      }
      await thought.save();
    }
    console.log("Assigned 2 random reactions to each thought");

    // Format data for table
    const updatedThoughtOutput = newThoughts.map((thought) => ({
      _id: thought._id,
      thoughtText: thought.thoughtText,
      username: thought.username,
      reactions: thought.reactions,
    }));
    console.table(updatedThoughtOutput);

    // Log success message
    console.log("All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
