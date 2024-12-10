const express = require("express");
// require controllers
const { createUser,getAllUsers } = require("../controllers/userControllers");

const router = express.Router();

// create user route
router.post("/register-user", createUser);

// get all users route
router.get("/get-all-users", getAllUsers);

// export router
module.exports = router;
