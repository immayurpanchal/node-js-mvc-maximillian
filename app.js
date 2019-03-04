//Create http server
//1. Import http built in node js module
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="title"/><button type="submit">Submit</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); //Redirect request to defined path
});
app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    "<html><head><title>Node Practice</title></head><body><h1>Hello from Express.JS</h1></body></html>"
  );
});
//passing handler function reference to
const server = http.createServer(app);

// console.log(routes.someText);

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
