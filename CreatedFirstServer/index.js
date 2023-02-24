const http = require('http');
const PORT = process.env.PORT || 6969;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome Home</h1>');
    res.end;
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end;
  } else if (req.url == '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ name: 'John', age: 30 }));
    res.end;
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
