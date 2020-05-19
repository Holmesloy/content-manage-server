var http = require("http");

http.createServer(function(request, response){
    // 写入头部，状态码和内容类型
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据
    response.end("Hello World\n");

}).listen(3001);
console.log("server running at http://127.0.0.1:3001/");