// Create web server
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./comments.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});