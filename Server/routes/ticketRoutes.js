const express = require("express");

const {
  createTicket,
  getAlltickets,
} = require("../controllers/ticketControllers");

const router = express.Router();

// POST route for creating a place

router.post("/createTicket", createTicket);

router.get("/gettickets", getAlltickets);


module.exports=router;