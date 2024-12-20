const mongoose = require("mongoose");

// create a schema for ticket

const ticketSchema = mongoose.Schema({
  userName: String,
  from: String,
  seats: Number,
});

//create a model for tickets

const tickets = mongoose.model("tickets", ticketSchema);

module.exports = tickets;
