import http from "http";

const user = {
    id: 1,
    name: "Ali",
    age: 25
}

"/user"
"/users"


const server = http.createServer((request, response) => {
  if (request.url === "/hello") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Salom! Bu backend javobi." }));
    return;
    }
    
    if (request.url === "/salom") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Xayr! Bu backend javobi." }));
      return;
    }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Sahifa topilmadi");
});

server.listen(3000, () => {
  console.log("Server 3000-portda ishga tushdi");
});
