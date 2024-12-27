const http = require('http');
const fs = require('fs');
const path = require('path');

// Correctly resolve the path to 'page.html' in the 'templates' folder
const dirPath = path.join(__dirname); // since app.js is in the templates folder
const file2Send = fs.readFileSync(path.join(dirPath, 'page.html'));

// Creating the server
const server = http.createServer(function(req, res) {
  console.log(req);

  res.setHeader('Content-Type', 'text/html');

  res.end(file2Send);
});

server.listen(3000, () => {
  console.log('Node.js web server at port 3000 is running..');
});
