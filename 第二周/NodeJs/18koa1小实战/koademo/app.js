//koa test1
// const koa = require('koa');
// const app = koa();
// app.use(function *(){
//   this.body = 'Hello World';
// });
// app.listen(3000);


// //koa test2
// var koa = require('koa');
// var app = koa();

// // x-response-time

// app.use(function *(next){
// 	var start = new Date;
// 	console.log('顺序1');
// 	yield next;
// 	var ms = new Date - start;
// 	console.log('顺序2');
// 	this.set('X-Response-Time', ms + 'ms');
// });

// // logger

// app.use(function *(next){
// 	var start = new Date;
// 	console.log('顺序3');
// 	yield next;
// 	var ms = new Date - start;
// 	console.log('顺序4');
// 	console.log('%s %s - %s', this.method, this.url, ms);
// });

// // response

// app.use(function *(){
// 	console.log('顺序5');
// 	this.body = 'Hello World';
// 	console.log('顺序5');
// });

// app.listen(3000);



//koa test3
var koa = require('koa');
var Router = require('koa-router');
var app = koa();
var router = new Router();
// x-response-time

app.use(function *(next){
	var start = new Date;
	console.log('顺序1');
	yield next;
	var ms = new Date - start;
	console.log('顺序2');
	this.set('X-Response-Time', ms + 'ms');
});
app.use(function *pageNotFound(next) {
  yield next;

  if (404 != this.status) return;

  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  this.status = 404;

  switch (this.accepts('html', 'json')) {
    case 'html':
      this.type = 'html';
      this.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      this.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      this.type = 'text';
      this.body = 'Page Not Found';
  }
});
app.listen(3000)