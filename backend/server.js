const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Backend Node.js fonctionne");
});

server.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});