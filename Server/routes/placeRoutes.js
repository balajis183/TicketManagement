// const express = require("express");

// const { uploadPicture } = require("../controllers/placeControllers");

// const router = express.Router();

// router.post("/createPlace", uploadPicture);

// module.exports = router;

const express = require("express");

const multer = require("multer");

const { createPlace } = require("../controllers/placeControllers");

const router = express.Router();

// POST route for creating a  place
router.post("/createPlace", createPlace);

module.exports = router;
