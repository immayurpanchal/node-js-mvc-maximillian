//Create http server
//1. Import http built in node js module
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
//passing handler function reference to
const server = http.createServer(app);

// console.log(routes.someText);

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
