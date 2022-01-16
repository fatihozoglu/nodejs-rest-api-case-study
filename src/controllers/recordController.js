const { filterRecords } = require("../services/recordService");

const getFilteredRecords = async (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  try {
    // Call filterRecords service to filter records from database
    const records = await filterRecords(startDate, endDate, minCount, maxCount);
    res.status(200).json({ code: 0, msg: "Success", records });
  } catch (err) {
    next(err);
  }
};

module.exports = { getFilteredRecords };
