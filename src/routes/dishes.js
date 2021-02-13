// import express framework
const express = require("express");

const router = express.Router();

// import controllers
const { dishController } = require("../controllers");

// get dishes
router.get("/", (req, res) => {
  dishController.getDishes((err, dishes) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(dishes);
    }
  });
});

module.exports = router;
