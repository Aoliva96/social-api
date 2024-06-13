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

// const users = [
//   {
//     username: "EmilyDavis",
//     email: "emilydavis@example.com",
//     thoughts: [],
//     friends: [],
//   },
//   {
//     username: "SarahJohnson",
//     email: "sarahjohnson@example.com",
//     thoughts: [],
//     friends: [],
//   },
//   {
//     username: "MichaelBrown",
//     email: "michaelbrown@example.com",
//     thoughts: [],
//     friends: [],
//   },
//   {
//     username: "JessicaMiller",
//     email: "jessicamiller@example.com",
//     thoughts: [],
//     friends: [],
//   },
//   {
//     username: "DavidWilson",
//     email: "davidwilson@example.com",
//     thoughts: [],
//     friends: [],
//   },
// ];

// // Thought seed data
// const thoughts = [
//   {
//     thoughtText: "Enjoying a cup of coffee while coding.",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "I love coding!",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Today is a beautiful day!",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Feeling motivated!",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Just finished a challenging project.",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Excited for the weekend!",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Learning something new every day!",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Grateful for my friends and family today.",
//     username: "",
//     reactions: [],
//   },
//   {
//     thoughtText: "Working on a cool side project.",
//     username: "",
//     reactions: [],
//   },
// ];

// // Reaction seed data
// const reactions = [
//   {
//     reactionBody: "That's awesome!",
//     username: "",
//   },
//   {
//     reactionBody: "I agree.",
//     username: "",
//   },
//   {
//     reactionBody: "Cool!",
//     username: "",
//   },
//   {
//     reactionBody: "Nice!",
//     username: "",
//   },
//   {
//     reactionBody: "That's great!",
//     username: "",
//   },
//   {
//     reactionBody: "Very interesting.",
//     username: "",
//   },
//   {
//     reactionBody: "Understandable.",
//     username: "",
//   },
//   {
//     reactionBody: "Good job!",
//     username: "",
//   },
//   {
//     reactionBody: "Keep it up!",
//     username: "",
//   },
// ];

// // Function to get random item from specified array
// const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Function to get 2 random items from specified array
// const getTwoRandomItems = (arr) =>
//   arr.sort(() => 0.5 - Math.random()).slice(0, 2);

// // Function to assign 2 random friends to each user
// const assignFriends = () => {
//   for (let i = 0; i < users.length; i++) {
//     let randomFriends = getTwoRandomItems(users);
//     for (let j = 0; j < randomFriends.length; j++) {
//       if (randomFriends[j].username !== users[i].username) {
//         users[i].friends.push(randomFriends[j].username);
//       }
//     }
//   }
// };

// // Function to assign 2 random thoughts to each user
// const assignThoughts = () => {
//   for (let i = 0; i < users.length; i++) {
//     let randomThoughts = [];
//     for (let j = 0; j < 2; j++) {
//       let randomThought = getRandomItem(thoughts);
//       randomThought.username = users[i].username;
//       users[i].thoughts.push(randomThought);
//       randomThoughts.push(randomThought);
//     }
//   }
// };

// // Function to assign 1 random reaction to each thought
// const assignReactions = () => {
//   for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users[i].thoughts.length; j++) {
//       let randomReaction = getRandomItem(reactions);
//       randomReaction.username = users[i].username;
//       users[i].thoughts[j].reactions.push(randomReaction);
//     }
//   }
// };

// // Function to assign friends and thoughts to users, assign reactions to thoughts, and return updated users and thoughts arrays
// function generateData(users, thoughts) {
//   assignFriends(users);
//   assignThoughts(users, thoughts);
//   assignReactions(users, thoughts);
//   return { users, thoughts };
// }

// // Export functions for use in seed.js
// module.exports = {
//   generateData,
//   assignFriends,
//   assignThoughts,
//   assignReactions,
// };
