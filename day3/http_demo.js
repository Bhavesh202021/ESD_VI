var http = require('http');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});//res.writeHead(x,y)
  //res.writeHead(200, {'Content-Type': 'text/html'});//res.writeHead(x,y)
  res.writeHead(200, {'Content-Type': 'application/json'});//res.writeHead(x,y)
  //res.write("Welcome to class </br>");
 
 //var rec = {"name":"Bhavesh", "class":"E&TC"}
  res.end(JSON.stringify([{"name":"bhavesh","Year": "Third", "class":"E&TC", "Division": "B","Roll No": 70,"Address":{"city":"Mumbai","state":"MH"}},{"name":"Pratik","Year": "Third", "class":"E&TC", "Division": "B","Roll No": 98,"Address":{"city":"Pune","state":"MH"}}]))
  
  // res.end(JSON.stringify(rec));
  // console.log(req.url);
  // res.end('Hello World!');
 // res.write('response after the end');
}).listen(8989);