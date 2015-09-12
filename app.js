var http = require('http');
var fs = require('fs');

http.createServer(runApp).listen(9000);
console.log("server is running...");

function runApp(req,res){
    res.writeHead(200,{"Context-Type":"text/html"});
    fs.createReadStream("index.html").pipe(res);
}