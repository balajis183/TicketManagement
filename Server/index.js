const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // cross-origin-resource-sharing
// import routes

const userRoutes = require("./routes/userRoutes");

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/TicketManagement ");
    console.log("Connected to Database of MongoDB");
  } catch {
    console.log(err.message);
  }
};

// npx create-react-app@latest

app.use(cors());

// used to parse json requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is working....");
});

// call user routes
app.use("/users", userRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening on port", 8000);
  connect();
});
