// import express framework
const express = require("express");

const router = express.Router();

// import controllers
const { sendSmsController } = require("../controllers");

// post category
router.post("/", (req, res) => {
  sendSmsController.sendMessage(req.body, (err, sms) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(sms);
    }
  });
});



module.exports = router;
