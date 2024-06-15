const { User, Thought } = require("../models");

// Export the thought controller
module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    await Thought.find()
      .then((thoughtData) => {
        if (!thoughtData) {
          return res.status(404).json({ error: "No thoughts found" });
        }
        let resObj;
        if (thoughtData.length === 1) {
          resObj = {
            message: `Showing only existing thought`,
            thought: thoughtData,
          };
        } else {
          resObj = {
            message: `Showing all ${thoughtData.length} thoughts`,
            thoughts: thoughtData,
          };
        }
        res.json(resObj);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Get single thought by id
  async getSingleThought(req, res) {
    await Thought.findOne({ _id: req.params.thoughtId })
      .populate("reactions")
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Showing thought with id ${thoughtData._id}`,
          thought: thoughtData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Create new thought and add to user's thoughts array
  /* Required fields for request body:
  {
    "thoughtText": "This is a new thought",
    "username": "newUser", ( username of thought author )
    "userId": "60a91c4f3d2e7b0015f5f0b6" ( _id of thought author )
  } 
  */
  async createThought(req, res) {
    let thoughtData;
    await Thought.create(req.body)
      .then((thoughtRes) => {
        thoughtData = thoughtRes;
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true, runValidators: true }
        );
      })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ error: "No user found with that id" });
        }
        res.json({
          message: `New thought created with id ${thoughtData._id}, attributed to user ${thoughtData.username}`,
          thought: thoughtData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Update thought by id
  async updateThought(req, res) {
    await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Updated thought with id ${req.params.thoughtId}`,
          updated: thoughtData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Delete thought by id and remove from user's thoughts array
  async deleteThought(req, res) {
    await Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(async (thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        await User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        )
          .then((userData) => {
            if (!userData) {
              return res
                .status(404)
                .json({ error: "No user found with that id" });
            }
            res.json({
              message: `Deleted thought with id ${req.params.thoughtId}, updated thought list for user ${userData.username}`,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json(err);
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Add reaction to thought
  /* Required fields for request body:
  {
    "reactionBody": "This is a new reaction",
    "username": "newUser", ( username of reaction author )
    "userId": "60a91c4f3d2e7b0015f5f0b6" ( _id of reaction author )
  }
  */
  async addReaction(req, res) {
    await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Added reaction to thought with id ${req.params.thoughtId}, new total: ${thoughtData.reactionCount}`,
          updated: thoughtData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  // Remove reaction from thought
  async removeReaction(req, res) {
    await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Removed reaction from thought with id ${req.params.thoughtId}, new total: ${thoughtData.reactionCount}`,
          updated: thoughtData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
};
