// import user model

const userModel = require("../models/userSchema");

// controller to insert user

const createUser = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const userDoc = new userModel({ name, email, password, contact });
    await userDoc.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

//http status codes   https://www.infidigit.com/blog/http-status-codes/

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server not functioning");
  }
};

//export the controlller
module.exports = { createUser, getAllUsers };
