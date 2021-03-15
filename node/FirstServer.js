let http = require("http");
let server = http.createServer(function(req,res){
res.end("Hello My Server in Node");
});
server.listen(7979);