const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.write('Failed to read data');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == '/read') {
    fs.readFile('first.txt', (err, data) => {
      if (err) {
        res.write('Failed to read data');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == '/write') {
    fs.writeFile('second.txt', 'I am not a fullstack developer', (err) => {
      if (err) {
        res.write('Failed to write data');
        res.end();
      } else {
        res.write('File written successfully');
        res.end();
      }
    });
  } else if (req.url == '/append') {
    fs.appendFile('first.txt', '\nNo! It will be full not pull ! 😑', (err) => {
      if (err) {
        res.write('Failed to append data');
        res.end();
      } else {
        res.write('Data appended successfully');
        res.end();
      }
    });
  } else if (req.url == '/delete') {
    fs.unlink('second.txt', (err) => {
      if (err) {
        res.write('Failed to delete file');
        res.end();
      } else {
        res.write('File deleted successfully');
        res.end();
      }
    });
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running on port ${PORT}`);
