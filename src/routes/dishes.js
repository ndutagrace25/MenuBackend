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

// post dish
router.post("/", (req, res) => {
  dishController.saveDish(req.body, (err, dish) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(dish);
    }
  });
});

module.exports = router;
