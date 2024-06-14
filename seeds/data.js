const { ObjectId } = require("mongoose").Types;

// User seed data
const users = [
  {
    _id: "EmilyDavis",
    username: "EmilyDavis",
    email: "emilydavis@example.com",
    thoughts: [],
    friends: ["SarahJohnson", "MichaelBrown"],
  },
  {
    _id: "SarahJohnson",
    username: "SarahJohnson",
    email: "sarahjohnson@example.com",
    thoughts: [],
    friends: ["EmilyDavis", "MichaelBrown"],
  },
  {
    _id: "MichaelBrown",
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    thoughts: [],
    friends: ["EmilyDavis", "SarahJohnson"],
  },
  {
    _id: "JessicaMiller",
    username: "JessicaMiller",
    email: "jessicamiller@example.com",
    thoughts: [],
    friends: ["DavidWilson"],
  },
  {
    _id: "DavidWilson",
    username: "DavidWilson",
    email: "davidwilson@example.com",
    thoughts: [],
    friends: ["JessicaMiller"],
  },
];

// Thought seed data
const thoughts = [
  {
    thoughtText: "Enjoying a cup of coffee while coding is the best.",
    username: "EmilyDavis",
    userId: "EmilyDavis",
    reactions: [],
  },
  {
    thoughtText: "I love coding!",
    username: "EmilyDavis",
    userId: "EmilyDavis",
    reactions: [],
  },
  {
    thoughtText: "Today is a beautiful day!",
    username: "SarahJohnson",
    userId: "SarahJohnson",
    reactions: [],
  },
  {
    thoughtText: "Feeling motivated!",
    username: "SarahJohnson",
    userId: "SarahJohnson",
    reactions: [],
  },
  {
    thoughtText: "Just finished a challenging project.",
    username: "MichaelBrown",
    userId: "MichaelBrown",
    reactions: [],
  },
  {
    thoughtText: "Excited for the weekend!",
    username: "MichaelBrown",
    userId: "MichaelBrown",
    reactions: [],
  },
  {
    thoughtText: "Learning something new every day!",
    username: "JessicaMiller",
    userId: "JessicaMiller",
    reactions: [],
  },
  {
    thoughtText: "Grateful for my friends and family today.",
    username: "JessicaMiller",
    userId: "JessicaMiller",
    reactions: [],
  },
  {
    thoughtText: "Working on a cool side project.",
    username: "DavidWilson",
    userId: "DavidWilson",
    reactions: [],
  },
  {
    thoughtText: "Make sure to take a break and stretch every hour!",
    username: "SarahJohnson",
    userId: "SarahJohnson",
    reactions: [],
  },
];

// Reaction seed data
const reactions = [
  {
    reactionBody: "Definitely!",
    username: "SarahJohnson",
  },
  {
    reactionBody: "I agree.",
    username: "MichaelBrown",
  },
  {
    reactionBody: "Same here!",
    username: "JessicaMiller",
  },
  {
    reactionBody: "Nice!",
    username: "EmilyDavis",
  },
  {
    reactionBody: "That's great!",
    username: "MichaelBrown",
  },
  {
    reactionBody: "Keep up the great work!",
    username: "EmilyDavis",
  },
  {
    reactionBody: "Understandable.",
    username: "SarahJohnson",
  },
  {
    reactionBody: "Same here.",
    username: "DavidWilson",
  },
  {
    reactionBody: "Me too.",
    username: "DavidWilson",
  },
  {
    reactionBody: "Nice!",
    username: "JessicaMiller",
  },
  {
    reactionBody: "Can't wait to see the final product!",
    username: "EmilyDavis",
  },
  {
    reactionBody: "I should try this.",
    username: "EmilyDavis",
  },
  {
    reactionBody: "Good advice!",
    username: "MichaelBrown",
  },
  {
    reactionBody: "I'll keep that in mind.",
    username: "SarahJohnson",
  },
  {
    reactionBody: "I'm excited to see it!",
    username: "DavidWilson",
  },
];

// Export seed data
module.exports = {
  users,
  thoughts,
  reactions,
};
