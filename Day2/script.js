const http = require('http');
const server =http.createServer(function(req,res){
    res.end("hellowOrld")
 
});
server.listen(3000);






