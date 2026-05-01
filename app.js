const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // Health route
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("OK");
  }

  // Default route
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify({
    message: "Production-ready Node App 🚀",
    status: "running",
    timestamp: new Date()
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
