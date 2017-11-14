//引入 express 模块
var express = require('express');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ 
	extended: false 
});
// console.log(express);
//app 是 express 对象的实例化，会得到对应的很多接口
var app = express();
// console.log(app);

// app.get('/index/:id', function (req, res) {
// 	// console.log(req.query);
//    // res.send('Hellores.send('Hello 【'+ req.query.usename +'】'); 【'+ req.query.usename +'】');//示例输入的地址为:http://localhost:8081/?usename=xiaochuan&&password=123456

//    // res.send('Hello 【'+ req.params.id +'】');//示例输入的地址为:http://localhost:8081/index/aaa
//    res.json({
//    	id:'Hello 【'+ req.params.id +'】'
//    });
//    //res.render('')
// })
 
app.use(express.static('public'));
app.get('/index',function(req,res) {
	// res.send('Hello World');
	//res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
	res.sendFile(__dirname + '/views' + '/index.html');
})
app.post('/index',urlencodedParser,function(req,res) {
	// console.log(req.body.usename);
	res.redirect('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+req.body.data+'&oq=s&rsv_pq=c88a639e0001def1&rsv_t=a60duCFZn7aQrR8JuKa4FJV0YIn9PvcaYJpXaUvIg6QK7T8dXbnrS6a7YsQ&rqlang=cn&rsv_enter=0&rsv_sug3=2&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=921&rsv_sug4=1382');
})

var server = app.listen(8081, function () {
 
  // var host = server.address().address;
  // var port = server.address().port;
 
  // console.log("应用实例，访问地址为 http://%s:%s", host, port);
  console.log('接口已启动');
})

//*********总结
//参考网址: http://www.runoob.com/nodejs/nodejs-express-framework.html
//1.安装并引用 express 启用一个 express 的实例
//2.app listen 一个端口  启动一个后台服务
//3.app.get  设置基础的路由  然后吐出数据
//4.平时的请求都是get 浏览器直接敲
//5.get post put delete   $.ajax->put

