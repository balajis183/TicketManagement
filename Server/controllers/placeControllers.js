// const multer = require("multer");
// const upload = multer({
//   dest: (__dirname = "/uploads"),
// });

// const uploadPicture = (req, res) => {
//   upload.single("file", (req, res) => {
//     console.log(req);
//   });
// };

// module.exports = { uploadPicture };

//import place model

const place = require("../models/placeSchema");
// const multer = require("multer");
const createPlace = async (req, res) => {
  try {
    const { placeName, placeAddress, placeDescription, image } = req.body;
    console.log(req.body);
    const placeDoc = new place({
      placeName,
      placeAddress,
      placeDescription,
    });
    await placeDoc.save();
    res.json({ data: placeDoc, message: "Place created successfully " });
  } catch (err) {
    console.log(err);
  }
};

const getAllplaces = async (req, res) => {
  // write  a function to get all data from Places

  try {
    // fetch all data from the database

    const places = await place.find();
    console.log(places);

    res.json({ places: places, message: "places fetched successfully" });
  } catch (err) {
    console.log(err);
  }
};

const getSinglePlace = async (req, res) => {
  const id = req.params.id;
  try {
    const placeDoc = await place.findOne({ _id: id });
    res.json({ place: placeDoc });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error in server" });
  }
};

module.exports = { createPlace, getAllplaces, getSinglePlace };
