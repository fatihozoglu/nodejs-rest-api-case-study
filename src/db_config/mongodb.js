const mongoose = require("mongoose");

// Function to connect to the database
const connect = async (mongodbUri) => {
  await mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const disconnect = async () => {
  await mongoose.connection.close();
};

module.exports = { connect, disconnect };
