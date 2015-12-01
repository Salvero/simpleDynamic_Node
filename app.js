var router = require("./router.js");

// Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at 3000 port:');

// Function that handles the reading of files and merge in value
