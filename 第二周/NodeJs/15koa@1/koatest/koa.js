// //入门
// var koa = require('koa');
// var app = koa();

// app.use(function *(){
// 	// response.end();
// 	// response.render();
// 	// response.json();
//    // this.body = 'Hello World';

//    // this.body = {
//    // 	name:'aaa'//控制台 -> Network -> Request Headers ->  Content-Type:application/json; charset=utf-8
//    // }

//    this.body = 'Hello koa';//控制台  Content-Type:text/plain; charset=utf-8
// });

// app.listen(3000);


//中间件级联
// var koa = require('koa');
// var app = koa();

// // // x-response-time

// app.use(function *(next){
//   yield next;
//   console.log(1);
// });

// // // logger

// app.use(function *(next){
//   yield next;
//   console.log(2);
// });

// app.use(function *(next){
//   console.log(3);
//   this.body = 'Hello koa';
// });


// // 设置签名Cookie密钥
// // app.keys = ['im a newer secret', 'i like turtle'];
// // app.use(function *(){
// //   this.body = 'Hello World';
// //   this.cookies.set('name', 'tobi', { signed: true });//设置 cookies
// 		console.log(this.cookies.get('name'));//获取 cookies 相应属性的值
// // });

// app.listen(3000,function() {
// 	console.log('正在启动');
// });
// // app.listen(3001);


// Context 上下文
// http://koa.bootcss.com/#context
// var koa = require('koa');
// var app = koa();
// app.use(function *(next){
// 	// this.throw(404,'系统出错');
//   // console.log(this);//这里的 this 表示的就是 Context 上下文
//   console.log(this.request.path);//  /xiaochuan
//   this.body = 'Hello koa';
// });


//request  对用户用户输入 进行操作
//http://koa.bootcss.com/#request
var koa = require('koa');
var app = koa();
app.use(function *(next){
	var controller = this.request.path;//用户输入的路径
	if(controller == "/xiaochuan" || controller == "/xiaochuan/"){
		this.body =  {
			test:'ok'
		}
	}else if(controller == '/index'){
		this.body = 'Hello koa';
		console.log(this.request.query);//{ color: 'blue', size: 'small' }
		console.log(this.request.query.color);//blue
	}else{
		this.throw(404, '当前页面并未找到');
	}
  console.log(this.request.path);//  /xiaochuan
});






app.listen(3000,function() {
	console.log('正在启动');
});