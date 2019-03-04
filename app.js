//Create http server
//1. Import http built in node js module
const http = require("http");

const express = require('express');

const app = express();

app.use((req, res, next) => { 
    console.log("In the middleware");
    next(); //It won't go to next middleware if next() is not written
});

app.use((req, res, next) => { 
    console.log("In another middleware");
    res.send('<html><head><title>Node Practice</title></head><body><h1>Hello from Express.JS</h1></body></html>');
});
//passing handler function reference to 
const server = http.createServer(app);

// console.log(routes.someText);

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
