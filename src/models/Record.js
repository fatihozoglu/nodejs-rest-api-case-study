const mongoose = require("mongoose");

// Create new schema based on documents in getir-case-study database -> records collection
const RecordSchema = new mongoose.Schema({
  key: String,
  value: String,
  createdAt: Date,
  counts: [Number],
});

module.exports = mongoose.model("Record", RecordSchema);
