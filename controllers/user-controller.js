const { User, Thought } = require("../models");

// Export the user controller
module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    await User.find()
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ error: "No users found" });
        }
        let resObj;
        if (userData.length === 1) {
          resObj = {
            message: `Showing only existing user`,
            user: userData,
          };
        } else {
          resObj = {
            message: `Showing all ${userData.length} users`,
            users: userData,
          };
        }
        res.json(resObj);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Get single user by id
  async getSingleUser(req, res) {
    await User.findOne({ _id: req.params.userId })
      .populate({
        path: "thoughts",
        model: "Thought",
      })
      .populate({
        path: "friends",
        model: "User",
      })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ error: "No user found with that id" });
        }
        res.json({
          message: `Showing user with id ${userData._id}`,
          user: userData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Create new user
  /* Required fields for request body:
  {
    "username": "newUser",
    "email": "newuser@example.com",
  }
  */
  async createUser(req, res) {
    await User.create(req.body)
      .then((userData) =>
        res.json({
          message: `New user created with id ${userData._id}`,
          created: userData,
        })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update user by id
  async updateUser(req, res) {
    await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ error: "No user found with that id" });
        }
        res.json({
          message: `Updated user with id ${userData._id}`,
          updated: userData,
        });
      })
      .catch((err) => res.status(500).json(err));
  },

  // Delete user by id and remove associated thoughts
  async deleteUser(req, res) {
    await User.findOneAndDelete({ _id: req.params.userId })
      .then(async (userData) => {
        if (!userData) {
          return res.status(404).json({ error: "No user found with that id" });
        }
        if (userData.thoughts.length) {
          await Thought.deleteMany({ _id: { $in: userData.thoughts } });
          res.json({
            message: `Deleted user ${userData.username} and ${userData.thoughtCount} associated thought(s)`,
            deleted: userData,
          });
        } else {
          res.json({
            message: `Deleted user ${userData.username}`,
            deleted: userData,
          });
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // Add friend to user's friend list
  async addFriend(req, res) {
    const friendData = await User.findById(req.params.friendId);
    if (!friendData) {
      return res.status(404).json({ error: "Unable to add friend, not found" });
    }
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    );
    if (!userData) {
      return res.status(404).json({ error: "No user found with that id" });
    }
    res.json({
      message: `Added user ${friendData.username} to user ${userData.username}'s friend list, new total: ${userData.friendCount}`,
      updated: userData,
    });
  },

  // Remove friend from user's friend list
  async removeFriend(req, res) {
    const friendData = await User.findById(req.params.friendId);
    if (!friendData) {
      return res
        .status(404)
        .json({ error: "Unable to remove friend, not found" });
    }
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!userData) {
      return res.status(404).json({ error: "No user found with that id" });
    }
    res.json({
      message: `Removed user ${friendData.username} from user ${userData.username}'s friend list, new total: ${userData.friendCount}`,
      updated: userData,
    });
  },
};
