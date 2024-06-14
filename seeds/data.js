const { ObjectId } = require("mongoose").Types;

// Generate ObjectIds
let objIds = [];
function generateIds() {
  const generate = () => new ObjectId();
  for (let i = 0; i < 5; i++) {
    objIds.push(generate());
  }
}

generateIds();

// User seed data
const users = [
  {
    _id: objIds[0],
    username: "EmilyDavis",
    email: "emilydavis@example.com",
    thoughts: [],
    friends: [],
  },
  {
    _id: objIds[1],
    username: "SarahJohnson",
    email: "sarahjohnson@example.com",
    thoughts: [],
    friends: [],
  },
  {
    _id: objIds[2],
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    thoughts: [],
    friends: [],
  },
  {
    _id: objIds[3],
    username: "JessicaMiller",
    email: "jessicamiller@example.com",
    thoughts: [],
    friends: [],
  },
  {
    _id: objIds[4],
    username: "DavidWilson",
    email: "davidwilson@example.com",
    thoughts: [],
    friends: [],
  },
];

// Thought seed data
const thoughts = [
  {
    thoughtText: "Enjoying a cup of coffee while coding is the best.",
    username: "EmilyDavis",
    userId: objIds[0],
    reactions: [],
  },
  {
    thoughtText: "I love coding!",
    username: "EmilyDavis",
    userId: objIds[0],
    reactions: [],
  },
  {
    thoughtText: "Today is a beautiful day!",
    username: "SarahJohnson",
    userId: objIds[1],
    reactions: [],
  },
  {
    thoughtText: "Feeling motivated!",
    username: "SarahJohnson",
    userId: objIds[1],
    reactions: [],
  },
  {
    thoughtText: "Just finished a challenging project.",
    username: "MichaelBrown",
    userId: objIds[2],
    reactions: [],
  },
  {
    thoughtText: "Excited for the weekend!",
    username: "MichaelBrown",
    userId: objIds[2],
    reactions: [],
  },
  {
    thoughtText: "Learning something new every day!",
    username: "JessicaMiller",
    userId: objIds[3],
    reactions: [],
  },
  {
    thoughtText: "Grateful for my friends and family today.",
    username: "JessicaMiller",
    userId: objIds[3],
    reactions: [],
  },
  {
    thoughtText: "Working on a cool side project.",
    username: "DavidWilson",
    userId: objIds[4],
    reactions: [],
  },
  {
    thoughtText: "Make sure to take a break and stretch every hour!",
    username: "DavidWilson",
    userId: objIds[4],
    reactions: [],
  },
];

// Reaction seed data
const reactions = [
  {
    reactionBody: "Definitely!",
    username: "SarahJohnson",
    userId: objIds[1],
  },
  {
    reactionBody: "I agree.",
    username: "MichaelBrown",
    userId: objIds[2],
  },
  {
    reactionBody: "Same here!",
    username: "JessicaMiller",
    userId: objIds[3],
  },
  {
    reactionBody: "Nice!",
    username: "EmilyDavis",
    userId: objIds[0],
  },
  {
    reactionBody: "That's great!",
    username: "MichaelBrown",
    userId: objIds[2],
  },
  {
    reactionBody: "Keep up the great work!",
    username: "EmilyDavis",
    userId: objIds[0],
  },
  {
    reactionBody: "Understandable.",
    username: "SarahJohnson",
    userId: objIds[1],
  },
  {
    reactionBody: "Same here.",
    username: "DavidWilson",
    userId: objIds[4],
  },
  {
    reactionBody: "Me too.",
    username: "DavidWilson",
    userId: objIds[4],
  },
  {
    reactionBody: "Nice!",
    username: "JessicaMiller",
    userId: objIds[3],
  },
  {
    reactionBody: "Can't wait to see the final product!",
    username: "EmilyDavis",
    userId: objIds[0],
  },
  {
    reactionBody: "I should try this.",
    username: "EmilyDavis",
    userId: objIds[0],
  },
  {
    reactionBody: "Good advice!",
    username: "MichaelBrown",
    userId: objIds[2],
  },
  {
    reactionBody: "I'll keep that in mind.",
    username: "SarahJohnson",
    userId: objIds[1],
  },
  {
    reactionBody: "I'm excited to see it!",
    username: "DavidWilson",
    userId: objIds[4],
  },
];

// Export seed data
module.exports = {
  users,
  thoughts,
  reactions,
};
