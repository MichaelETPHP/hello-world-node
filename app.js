const http = require('http');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Node.js on cPanel!');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});