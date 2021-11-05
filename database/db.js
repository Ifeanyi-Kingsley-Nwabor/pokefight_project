const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to Database was successful.");
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

client.on("error", (err) => console.log(err));

module.exports = db;
