var http = require('http');
var date = require('./dateModule.js');
var url = require('url')
var fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("the data and time are currently:"+date.mydatatime());
    res.write(req.url);
    console.log('user hits the url!');
    res.end();
}).listen(9396);

http.createServer(function(req,res){
    fs.readFile("index.html",function(err, data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
    
    
}).listen(9090);

var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(address,true);
var query = q.query;
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(q.hostname+"\n");
res.write(q.pathname+"\n");
res.write(q.protocol+"\n");
res.write(query.month+"\n");
res.end();

}).listen(9393);