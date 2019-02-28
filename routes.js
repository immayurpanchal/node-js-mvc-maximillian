const fs = require("fs");

const requestHandler = (request, response) => {
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
};

// module.exports.handler = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "some hard coded text"
// };

exports.handler = requestHandler;
