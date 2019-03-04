const express = require("express");

const router = express.Router();

//GET request same PATH
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="title"/><button type="submit">Submit</button></form>'
  );
});

//POST request same PATH
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); //Redirect request to defined path
});
module.exports = router;
