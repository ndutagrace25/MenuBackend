// import express framework
const express = require("express");

const router = express.Router();

// import controllers
const { uploadsController } = require("../controllers");


// post file
router.post("/", (req, res) => {
  uploadsController.saveFile(req.files, (err, files) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(files);
    }
  });
});





module.exports = router;
