var http = require('http');
var url = require('url');
var reverse = require('./reverseName.js')
const server = http.createServer(function(req,res){
var q = url.parse(req.url,true);
var qdata = q.query;
const revName = reverse.reverseName(qdata.name);
if (qdata.name){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('mirror of your name '+qdata.name +' is '+revName);
    res.end();
}
else{
    res.writeHead(400,{'Content-Type':'text/plain'});
    res.write('Invalid request. Expected a "name" field in the request body.');
    res.end();
}

});

const port = 4545;
server.listen(port,()=>{
console.log('server is listening on port ' ,{port})
});