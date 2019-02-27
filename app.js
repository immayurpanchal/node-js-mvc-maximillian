//Create http server
//1. Import http built in node js module
const http = require("http");
const fs = require("fs");

//2. use createServer() which returns server object and requires function as a argument
const server = http.createServer((request, response) => {
  // console.log(request.url);
  // console.log(">>>>>>>>>>>");
  // console.log(request.method);
  // console.log(">>>>>>>>>>>");
  // console.log(request.headers);

  // process.exit();

  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My First NodeJS</title></head>");
    response.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    response.write("</html>");
    return response.end(); //After this line you should not add res.write();, it will throw an error
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    //Register a listener to get
    request.on("data", chunk => {
      console.log(chunk); //This is not human readable
      body.push(chunk);
    });
    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      //   fs.writeFileSync("message.txt", message); //writeFileSync block the next line code until it is done
      fs.writeFile("message.txt", message, err => {
        response.statusCode = 302;
        response.setHeader("Location", "/"); //Set redirect request to home
        return response.end();
      });
    });
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
