// import express framework
const express = require("express");

const router = express.Router();

// import controllers
const { categoriesController } = require("../controllers");

// get categories
router.get("/", (req, res) => {
  categoriesController.getCategories((err, categories) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(categories);
    }
  });
});

// post category
router.post("/", (req, res) => {
  categoriesController.saveCategory(req.body, (err, category) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(category);
    }
  });
});

// delete category
router.delete("/", (req, res) => {
  categoriesController.deleteCategory(req.body, (err, category) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(category);
    }
  });
});

module.exports = router;
