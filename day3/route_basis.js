var http = require('http');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.writeHead(200, {'Content-Type': 'application/json'});
  //res.write('Ashish Jha TE E&TC B');
  //var rec = {"name":"Ashish", "class":"E&TC"}
 // res.end(JSON.stringify([{"name":"Ashish","Year": "Third", "class":"E&TC", "Division": "B","Roll No": 59,"Address":{"city":"Mumbai","state":"MH"}},{"name":"Akash","Year": "Third", "class":"E&TC", "Division": "B","Roll No": 16,"Address":{"city":"Pune","state":"MH"}}]))
  console.log(req.url);
  if(req.url == "/"){
      res.write('Welcome to homepage!')
  }
  else if(req.url == "/st"){
    res.write('Welcome to Students page!')
}
else if(req.url == "/te"){
    res.write('Welcome to Teacher page!')
}
 else {res.end('Page not found!');} 
}).listen(8080);