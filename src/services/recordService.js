const Record = require("../models/Record");

// Filter records by given arguments
const filterRecords = async (startDate, endDate, minCount, maxCount) => {
  // Using Mongodb aggregation framework for filtering data
  return await Record.aggregate([
    {
      // Find all records between startDate and endDate
      $match: {
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      },
    },
    {
      // Sum all values in counts array and create a new totalCount field in each filtered document
      $addFields: {
        totalCount: { $sum: "$counts" },
      },
    },
    {
      // Filter documents again by totalCounts field
      $match: {
        totalCount: { $gte: minCount, $lte: maxCount },
      },
    },
    {
      // Exclude _id field and show only key, createdAt and totalCount fields
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: 1,
      },
    },
  ]);
};

module.exports = { filterRecords };
