// User seed data
const users = [
  {
    username: "EmilyDavis",
    email: "emilydavis@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "SarahJohnson",
    email: "sarahjohnson@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "MichaelBrown",
    email: "michaelbrown@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "JessicaMiller",
    email: "jessicamiller@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "DavidWilson",
    email: "davidwilson@example.com",
    thoughts: [],
    friends: [],
  },
];

// Thought seed data
const thoughts = [
  {
    thoughtText: "Enjoying a cup of coffee while coding.",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "I love coding!",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Today is a beautiful day!",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Feeling motivated!",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Just finished a challenging project.",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Excited for the weekend!",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Learning something new every day!",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Grateful for my friends and family today.",
    username: "",
    reactions: [],
  },
  {
    thoughtText: "Working on a cool side project.",
    username: "",
    reactions: [],
  },
];

// Reaction seed data
const reactions = [
  {
    reactionBody: "That's awesome!",
    username: "",
  },
  {
    reactionBody: "I agree.",
    username: "",
  },
  {
    reactionBody: "Cool!",
    username: "",
  },
  {
    reactionBody: "Nice!",
    username: "",
  },
  {
    reactionBody: "That's great!",
    username: "",
  },
  {
    reactionBody: "Very interesting.",
    username: "",
  },
  {
    reactionBody: "Understandable.",
    username: "",
  },
  {
    reactionBody: "Good job!",
    username: "",
  },
  {
    reactionBody: "Keep it up!",
    username: "",
  },
];

// Function to get random item from specified array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to get 2 random items from specified array
const getTwoRandomItems = (arr) =>
  arr.sort(() => 0.5 - Math.random()).slice(0, 2);

// Function to assign 2 random friends to each user without duplicates
const assignFriends = () => {
  let availableUsers = [...users];
  for (let i = 0; i < users.length; i++) {
    let randomFriends = getTwoRandomItems(availableUsers);
    for (let j = 0; j < randomFriends.length; j++) {
      if (randomFriends[j].username !== users[i].username) {
        users[i].friends.push(randomFriends[j].username);
      }
    }
    // Remove the assigned friends to avoid duplicates
    availableUsers = availableUsers.filter(
      (user) => user !== randomFriends[0] && user !== randomFriends[1]
    );
  }
};

// Function to assign 2 random thoughts to users without duplicates
const assignThoughts = () => {
  let availableThoughts = [...thoughts];
  for (let i = 0; i < users.length; i++) {
    let randomThoughts = [];
    for (let j = 0; j < 2; j++) {
      let randomThought = getRandomItem(availableThoughts);
      randomThought.username = users[i].username;
      users[i].thoughts.push(randomThought);
      randomThoughts.push(randomThought);

      // Remove the assigned thought to avoid duplicates
      availableThoughts = availableThoughts.filter(
        (thought) => thought !== randomThought
      );
    }
  }
};

// Function to assign 1 random reaction to thoughts without duplicates
const assignReactions = () => {
  let availableReactions = [...reactions];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].thoughts.length; j++) {
      let randomReaction = getRandomItem(availableReactions);
      randomReaction.username = users[i].username;
      users[i].thoughts[j].reactions.push(randomReaction);

      // Remove the assigned reaction to avoid duplicates
      availableReactions = availableReactions.filter(
        (reaction) => reaction !== randomReaction
      );
    }
  }
};

// Export functions for use in seed.js
module.exports = { assignFriends, assignThoughts, assignReactions };
