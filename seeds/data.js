// User seed data
const users = [
  {
    username: "EmilyDavis",
    email: "emilydavis@example.com",
    thoughts: [],
    friends: ["SarahJohnson", "MichaelBrown"],
  },
  {
    username: "SarahJohnson",
    email: "sarahjohnson@example.com",
    thoughts: [],
    friends: ["EmilyDavis", "MichaelBrown"],
  },
  {
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    thoughts: [],
    friends: ["EmilyDavis", "SarahJohnson"],
  },
  {
    username: "JessicaMiller",
    email: "jessicamiller@example.com",
    thoughts: [],
    friends: ["DavidWilson"],
  },
  {
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
    reactions: [
      {
        reactionBody: "Definitely!",
        username: "SarahJohnson",
      },
      {
        reactionBody: "I agree.",
        username: "MichaelBrown",
      },
    ],
  },
  {
    thoughtText: "I love coding!",
    username: "EmilyDavis",
    reactions: [
      {
        reactionBody: "Same here!",
        username: "JessicaMiller",
      },
    ],
  },
  {
    thoughtText: "Today is a beautiful day!",
    username: "SarahJohnson",
    reactions: [
      {
        reactionBody: "Nice!",
        username: "EmilyDavis",
      },
    ],
  },
  {
    thoughtText: "Feeling motivated!",
    username: "SarahJohnson",
    reactions: [
      {
        reactionBody: "That's great!",
        username: "MichaelBrown",
      },
    ],
  },
  {
    thoughtText: "Just finished a challenging project.",
    username: "MichaelBrown",
    reactions: [
      {
        reactionBody: "Keep up the great work!",
        username: "EmilyDavis",
      },
    ],
  },
  {
    thoughtText: "Excited for the weekend!",
    username: "MichaelBrown",
    reactions: [
      {
        reactionBody: "Understandable.",
        username: "SarahJohnson",
      },
    ],
  },
  {
    thoughtText: "Learning something new every day!",
    username: "JessicaMiller",
    reactions: [
      {
        reactionBody: "Same here.",
        username: "DavidWilson",
      },
    ],
  },
  {
    thoughtText: "Grateful for my friends and family today.",
    username: "JessicaMiller",
    reactions: [
      {
        reactionBody: "Me too.",
        username: "DavidWilson",
      },
    ],
  },
  {
    thoughtText: "Working on a cool side project.",
    username: "DavidWilson",
    reactions: [
      {
        reactionBody: "Nice!",
        username: "JessicaMiller",
      },
      {
        reactionBody: "Can't wait to see the final product!",
        username: "EmilyDavis",
      },
    ],
  },
  {
    thoughtText: "Make sure to take a break and stretch every hour!",
    username: "SarahJohnson",
    reactions: [
      {
        reactionBody: "I should try this.",
        username: "EmilyDavis",
      },
      {
        reactionBody: "Good advice!",
        username: "MichaelBrown",
      },
    ],
  },
];

module.exports = {
  users,
  thoughts,
};
