const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

//GET request same PATH
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//POST request same PATH
router.post("/add-product", (req, res, next) => {
  res.redirect("/"); //Redirect request to defined path
});
module.exports = router;
