const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//import routes
const commFormsRoute = require("./routes/commforms");
app.use("/commforms", commFormsRoute);

app.use("/", (req, res) => {
  res.send("we are home.");
});
// connect to DB

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();
//how do we start listening to server
const PORT = process.env.PORT || 3000;
app.listen(PORT);
