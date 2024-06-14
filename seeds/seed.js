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
    console.log("Users seeded successfully");

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
    console.log("Thoughts seeded successfully");

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
    console.log("Updated user list with thoughts");

    // Update user data with friends
    for (let i = 0; i < newUsers.length; i++) {
      const user = newUsers[i];
      const friends = user.friends.map((username) =>
        newUsers.find((friend) => friend.username === username)
      );
      user.friends = friends.map((friend) => friend._id);
      await user.save();
    }
    console.log("Updated user list with friends");

    // Update thought data with reactions
    for (let i = 0; i < newThoughts.length; i++) {
      const thought = newThoughts[i];
      for (let j = 0; j < reactions.length; j++) {
        const reaction = reactions[j];
        if (thought.username === reaction.username) {
          thought.reactions.push(reaction);
        }
      }
      await thought.save();
    }
    console.log("Updated thought list with reactions");

    // Log success message
    console.log("All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
