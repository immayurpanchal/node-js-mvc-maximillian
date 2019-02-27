//Create http server
//1. Import http built in node js module
const http = require("http");

//2. use createServer() which returns server object and requires function as a argument
const server = http.createServer((request, response) => {
  // console.log(request.url);
  // console.log(">>>>>>>>>>>");
  // console.log(request.method);
  // console.log(">>>>>>>>>>>");
  // console.log(request.headers);

  // process.exit();

  const url = request.url;
  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My First NodeJS</title></head>");
    response.write("<body><form><input type='text'/><button type='submit'>Submit</button></form></body>");
    response.write("</html>");
    return response.end(); //After this line you should not add res.write();, it will throw an error
  }
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My First NodeJS</title></head>");
  response.write("<body><h1>Hello from NodeJS</h1></body>");
  response.write("</html>");
  response.end(); //After this line you should not add res.write();, it will throw an error
});

//3. listen() runs the process on defined port for all requests.
server.listen(3000);
