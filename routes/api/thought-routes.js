const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// ENDPOINT: /api/thoughts
// ========================

// GET all thoughts
router.route("/").get(getAllThoughts);

// GET single thought by id
router.route("/:thoughtId").get(getSingleThought);

// POST new thought
router.route("/").post(createThought);

// PUT to update thought by id
router.route("/:thoughtId").put(updateThought);

// DELETE thought by id
router.route("/:thoughtId").delete(deleteThought);

// ENDPOINT: /api/thoughts/:thoughtId/reactions
// =============================================

// POST to add reaction to thought
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE to remove reaction from thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
