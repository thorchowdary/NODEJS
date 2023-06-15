var http = require('http');
var url = require('url');

const server = http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var qdata = q.query;
    if(qdata.a && qdata.b){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const sum = parseInt(qdata.a)+parseInt(qdata.b)
        console.log(sum);
        res.write('<h1>'+'sum of ' + qdata.a + ' & ' + qdata.b + ' is ' + sum +'</h1>'+'\n');
        //res.write(sum.toString());//converts interger to string
        res.end();
    }
    else{
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write('Invalid request. Expected a "a" and "b" field in the request body.');
        res.end();
    }

});

const port = 4545;
server.listen(port, ()=>{
console.log('server is listening on port',{port});
});