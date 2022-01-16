const { body, validationResult } = require("express-validator");

// Validations array for checking input values
const validations = [
  body("startDate")
    .exists()
    .withMessage("Please enter a start date")
    .isDate()
    .withMessage("startDate must be a valid date in YYYY-MM-DD format"),
  body("endDate")
    .exists()
    .withMessage("Please enter an end date")
    .isDate()
    .withMessage("endDate must be a valid date in YYYY-MM-DD format"),
  body("minCount")
    .exists()
    .withMessage("Please enter a minCount value")
    .isInt()
    .withMessage("minCount must be an integer"),
  body("maxCount")
    .exists()
    .withMessage("Please enter a minCount value")
    .isInt()
    .withMessage("maxCount must be an integer"),
];

// Middleware for validating inputs
const validateInputs = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({
      code: 1,
      msg: "Please enter valid inputs",
      errors: errors.array(),
    });
  };
};
module.exports = { validations, validateInputs };
