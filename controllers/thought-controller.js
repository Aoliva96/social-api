const { User, Thought } = require("../models");

// Function to get total number of thoughts
const thoughtCount = async () => {
  return await Thought.countDocuments();
};

// Function to get number of reactions for a thought
const reactionCount = async (thoughtId) => {
  if (!ObjectId.isValid(thoughtId)) {
    throw new Error("Invalid thought id");
  }
  const thought = await Thought.findById(thoughtId);
  return thought.reactionCount;
};

// Export the thought controller
module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    await Thought.find({})
      .populate({})
      .select("-__v")
      .then((thoughtData) => {
        if (!thoughtData) {
          return res.status(404).json({ error: "No thoughts found" });
        }
        let resObj;
        if (thoughtData.length === 1) {
          resObj = {
            message: `Showing only existing thought`,
            thought: `${thoughtData}`,
          };
        } else {
          resObj = {
            message: `Showing all ${thoughtCount()} thoughts`,
            thoughts: `${thoughtData}`,
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
      .populate({})
      .select("-__v")
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Showing thought with id ${req.params.thoughtId}`,
          thought: `${thoughtData}`,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  // Create new thought and add to user's thoughts array
  async createThought(req, res) {
    await Thought.create(req.body)
      .then((thoughtData) => {
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
          message: `New thought created with id ${thoughtData._id}, attributed to user with id ${req.body.userId}`,
          thought: `${thoughtData}`,
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
          updated: `${thoughtData}`,
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
          { new: true, runValidators: true }
        )
          .then((userData) => {
            if (!userData) {
              return res
                .status(404)
                .json({ error: "No user found with that id" });
            }
            res.json({
              message: `Deleted thought with id ${req.params.thoughtId} and updated list for user with id ${userData._id}`,
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
          message: `Added reaction to thought with id ${req.params.thoughtId}`,
          updated: `${thoughtData}`,
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
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          return res
            .status(404)
            .json({ error: "No thought found with that id" });
        }
        res.json({
          message: `Removed reaction from thought with id ${req.params.thoughtId}`,
          updated: `${thoughtData}`,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
};
