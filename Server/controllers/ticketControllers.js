const ticket = require("../models/ticketSchema");

const createTicket = async (req, res) => {
  try {
    const { userName, from, seats } = req.body;
    console.log(req.body);
    const ticketDoc = new ticket({
      userName,
      from,
      seats,
    });
    await ticketDoc.save();
    res.json({ data: ticketDoc, message: " Ticket created successfully" });
  } catch (err) {
    console.log(err);
  }
};


const getAlltickets= async (req, res) => {
  try {
    const tickets = await ticket.find();
    console.log(tickets);
    res.json({ tickets: tickets, message: "Tickets fetched successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTicket, getAlltickets };
