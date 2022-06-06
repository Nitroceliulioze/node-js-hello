const http = require('http'); //'http' module
const myMod = require('./mymodule');

const hostname = 'DESKTOP-TF0IRQC'; // IP for local host 
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!' + myMod.dateTime());
});

server.listen(port, hostname, () => {
    console.log(`HTTP server listening at http://${hostname}:${port}`);
});