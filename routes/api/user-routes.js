const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// ENDPOINT: /api/users
// =====================

// GET all users
router.route("/").get(getAllUsers);

// POST new user
router.route("/").post(createUser);

// GET single user by id
router.route("/:userId").get(getSingleUser);

// PUT to update user by id
router.route("/:userId").put(updateUser);

// DELETE user by id
router.route("/:userId").delete(deleteUser);

// ENDPOINT: /api/users/:userId/friends
// =====================================

// POST to add new friend to user's friend list
router.route("/:userId/friends/:friendId").post(addFriend);

// DELETE to remove friend from user's friend list
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
