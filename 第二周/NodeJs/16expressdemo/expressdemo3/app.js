//第三方模块的加载
var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.static('public'));
//配置 swig
var swig = require('swig');
app.set('view engine','html');
app.engine('html',swig.renderFile);
//设置 mysql
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'phplesson'
});
connection.connect();

//配置路由
app.get('/',function(req,res,next) {
	res.render('index',{
		title:'第一个Express的小程序'
	});
});
//表单提交
app.get('/receive',function(req,res,next) {
	// console.log(req);
	// console.log(req.query);
	console.log('前台发来的数据',req.query.username);
	// res.json({
	// 	data:123
	// });
	// 插入数据库的数据
	var post  = {
		username:req.query.username
	};
	//插入数据库方法
	var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
		if (error){
			res.json({
				success:'no',
				msg:'插入失败'
			});
		}else{
			res.json({
				success:'ok',
				msg:'插入成功'
			});
		}
	});
})
//容错机制 
app.get('*',function(req,res) {
	res.status(404);
	res.end('404');
});
app.use(function(err,req,res,next) {
	res.status(500);
	res.end('error...')
});
//启动服务
app.listen(8081,function() {
	console.log('Server is running');
});