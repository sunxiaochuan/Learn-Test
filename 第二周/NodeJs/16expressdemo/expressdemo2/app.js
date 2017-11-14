//参考网址 http://www.expressjs.com.cn/4x/api.html
var express = require('express');
var app = express();
// app.get('/',function(req,res,next) {
// 	res.json({
// 		result:123
// 	})
// })
var fn1 = function(req,res,next) {
	console.log(1);
	next();
};
var fn2 = function(req,res,next) {
	console.log(2);
	next();
};
var fn3 = function(req,res) {
	res.end('123');
};
app.get('/',fn1,fn2,fn3);
app.listen(3000,function() {
	console.log('Server is Diy');
})