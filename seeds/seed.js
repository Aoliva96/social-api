const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

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

    // Seed database with new data
    console.log("Attempting to seed database...");
    const newUsers = await User.insertMany(users);
    console.log("Users seeded successfully");
    console.table(newUsers);

    const newThoughts = await Thought.insertMany(thoughts);
    console.log("Thoughts seeded successfully");
    console.table(newThoughts);

    console.log("All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
