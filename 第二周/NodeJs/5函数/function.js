//同样的功能(web服务器功能)，不同的实现方式

//匿名函数
var http = require('http');

http.createServer(function (request,response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello World');
	response.end();
}).listen(8888);



//先定义后传递
var http = require('http');

function onRequest(request,response) {
	response.writeHead(200,{'Content-Type':'text/plan'});
	response.write('Hello World');
	response.end();
}

http.createServer(onRequest).listen(8888);