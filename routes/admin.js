const path = require("path");

const express = require("express");

const router = express.Router();

//GET request same PATH
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

//POST request same PATH
router.post("/add-product", (req, res, next) => {
  res.redirect("/"); //Redirect request to defined path
});
module.exports = router;
