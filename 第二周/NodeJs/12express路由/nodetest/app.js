var express = require('express');
var app = express();

// 使用一个回调函数处理路由：
// app.get('/index/test', function (req, res) {
//   res.send('Hello from A!');
// });

//使用多个回调函数处理路由（记得指定 next 对象）：
// app.get('/index/test',function(req,res,next) {
// 	// res.send('Hello express');
// 	console.log('response will be sent by the next function ...');
//   	next();
// },function(req,res,next) {
// 	res.send('Hello from B!');
// 	next();
// },function(req,res) {
// 	// console.log('我的结尾.....');
// 	res.json({
// 		data:123
// 	});
// });

//使用回调函数数组处理路由：
// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }
// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }
// var cb2 = function (req, res) {
//   res.send('Hello from C!');
// }
// app.get('/index/c', [cb0, cb1, cb2]);

//混合使用函数和函数数组处理路由：
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}
app.get('/index/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

app.listen('8081',function() {
	console.log('接口已启动');
});

//笔记
//MVC   models(处理数据)   views(视图)   controllers(处理路由)