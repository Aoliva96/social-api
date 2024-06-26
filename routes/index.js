const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use((req, res) => {
  res.status(404).send("Invalid route / route not found");
});

module.exports = router;
