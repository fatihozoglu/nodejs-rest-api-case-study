const router = require("express").Router();

router.post("/", getFilteredRecords);
// Handle any other request
router.use("/*", (req, res) => {
  res.status(404).json({ code: 2, msg: "Resource Not Found" });
});

module.exports = router;
