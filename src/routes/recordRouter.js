const router = require("express").Router();
const { getFilteredRecords } = require("../controllers/recordController");
const {
  validations,
  validateInputs,
} = require("../middlewares/validateInputs");

router.post("/", validateInputs(validations), getFilteredRecords);

module.exports = router;
