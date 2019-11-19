//require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require("mongoose");

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebookslist";

mongoose.connect(MONGODB_URI);

// const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/googlebookslist"
// mongoose.connect(mongoURL, { useNewUrlParser: true })
//   .then(() => {
//     console.log(" ==> Successfully connected to mongoDB.");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to mongoDB: ${err}`);
//   });

require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});