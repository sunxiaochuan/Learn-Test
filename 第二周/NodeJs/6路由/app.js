//引入 名为http 的模块文件 
var server = require('./http');
var router = require("./router");
//调用 引入模块的方法
server.start(router.route);
