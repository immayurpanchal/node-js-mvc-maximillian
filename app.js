//Create http server
//1. Import http built in node js module
const http = require("http");

const express = require('express');

const app = express();

app.use((req, res, next) => { 
    console.log("In the middleware");
});

app.use((req, res, next) => { 
    console.log("In another middleware");
});
//passing handler function reference to 
const server = http.createServer(routes.handler);

// console.log(routes.someText);

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
