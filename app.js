//Create http server
//1. Import http built in node js module
const http = require("http");
const routes = require('./routes');


//2. use createServer() which returns server object and requires function as a argument
// const server = http.createServer((request, response) => {
//   console.log(request.url);
//   console.log(">>>>>>>>>>>");
//   console.log(request.method);
//   console.log(">>>>>>>>>>>");
//   console.log(request.headers);

//   process.exit();
// });

//passing handler function reference to 
const server = http.createServer(routes.handler);

// console.log(routes.someText);

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
