var http = require('http');//获取 Node API
//req  表示用户输入的信息     res  表示服务器端需要返回的代码
http.createServer(function(req,res){
        //定义HTTP头
        res.writeHead(200,{'Content-Type':'text/plain'});
        //发送相应数据
        res.end('Hello world!\n');

}).listen(8000);

//服务运行后输出一行信息
console.log('sever is running...');