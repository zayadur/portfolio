const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const requestedUrl = req.url;

  if (requestedUrl === '/' || requestedUrl === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    serveFile(filePath, res);
    return;
  }

  const filePath = path.join(__dirname, requestedUrl);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      if (stats.isDirectory()) {
        serveDirectoryListing(filePath, res);
      } else {
        serveFile(filePath, res);
      }
    }
  });
});

function serveDirectoryListing(directoryPath, res) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      const listing = generateDirectoryListing(directoryPath, files);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(listing);
    }
  });
}

function serveFile(filePath, res) {
  const extension = path.extname(filePath);
  let contentType = 'text/html';

  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

function generateDirectoryListing(directoryPath, files) {
  const listing = files.map(file => {
    return file;
  }).join('\n');

  return listing;
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
