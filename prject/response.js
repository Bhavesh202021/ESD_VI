var http = require('http');
http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('Welcome to home !');

 console.log(req,res);
  res.end(JSON.stringify({"name":"bahvesh"}));
}).listen(8080);