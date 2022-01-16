const app = require("./app");
const db = require("./db_config/mongodb");

// Set port from environment variables or set it to 3000 if it doesn't exist
const port = process.env.PORT || 3000;

// Connect to the databse with MONGO_URI environment variable string
db.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to the database`);
    app.listen(port, () => {
      console.log(`Server started listening at ${port}.`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
