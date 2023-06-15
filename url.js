var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var qdata = q.query;
  console.log(qdata)
  
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

const port = 4545;
server.listen(port,()=>{
console.log('Server running on port', {port})
});
