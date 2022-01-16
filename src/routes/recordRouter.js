const router = require("express").Router();
const { getFilteredRecords } = require("../controllers/recordController");
const {
  validations,
  validateInputs,
} = require("../middlewares/validateInputs");

router.post("/", validateInputs(validations), getFilteredRecords);
// Handle any other request
router.use("/*", (req, res) => {
  res.status(404).json({ code: 2, msg: "Resource Not Found" });
});

module.exports = router;
