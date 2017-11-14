var express = require('express');
var app = express();
var swig = require('swig');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('index',{
  	title:'测试首页',
  	data:'Hello Express'
  });
});
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// logErrors 将请求和错误信息写入标准错误输出、日志或类似服务：
function logErrors(err, req, res, next) {
  console.error('记录日志：', err.stack);
  next(err);
}
// clientErrorHandler 的定义如下（注意这里将错误直接传给了 next）：
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}
// errorHandler 能捕获所有错误，其定义如下：
function errorHandler(err, req, res, next) {
  res.status(500);
  res.end('您的系统瘫痪，工程师哥哥正在努力修复');
}

app.listen('8081',function() {
	console.log('接口已启动');
});

//笔记
//swig 模块网址:https://www.npmjs.com/package/swig-templates
//swig 模块使用教程：http://blog.csdn.net/dszgf5717/article/details/50697686