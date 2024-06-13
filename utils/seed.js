const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  users,
  thoughts,
  assignFriends,
  assignThoughts,
  assignReactions,
} = require("./data");

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", async () => {
  console.log("Connected to database");
  try {
    // Clear the database of existing data
    let checkForUsers = await connection.db
      .listCollections({ name: "users" })
      .toArray();
    if (checkForUsers.length) {
      await connection.db.dropCollection("users");
    }
    let checkForThoughts = await connection.db
      .listCollections({ name: "thoughts" })
      .toArray();
    if (checkForThoughts.length) {
      await connection.db.dropCollection("thoughts");
    }

    // Assign random friends, thoughts, and reactions
    assignFriends(users);
    assignThoughts(users, thoughts);
    assignReactions(users, thoughts);

    // Seed database with updated data
    for (let user of users) {
      const newUser = await User.create(user);
      console.log(`User ${newUser.username} created`);
      for (let thought of user.thoughts) {
        thought.userId = newUser._id;
        await Thought.create(thought);
        console.log(`Thought created for ${newUser.username}`);
      }
    }

    console.log("All data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
