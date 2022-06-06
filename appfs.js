const http = require('http'); //'http' module
const fileSystem = require('fs'); //file system

const hostname = 'DESKTOP-TF0IRQC'; // IP for local host 
const port = 3000;

const server = http.createServer(function (req, res) {
  fileSystem.readFile('index.html', function (error, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });  
});

server.listen(port, hostname, () => {
    console.log(`HTTP server listening at http://${hostname}:${port}`);
});