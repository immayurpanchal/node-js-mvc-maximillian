const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    "<html><head><title>Node Practice</title></head><body><h1>Hello from Express.JS</h1></body></html>"
  );
});
module.exports = router;
