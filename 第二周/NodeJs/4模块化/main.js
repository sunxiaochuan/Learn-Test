//调用模块文件
//通过require 方法   调用Hello模块  参数为文件名 扩展名不需要
var Hello = require('./hello');//  ./   是与当前文件同一级的路径  注意大小写

hello = new Hello();
hello.setName ('Xiaochuan');
hello.sayHello();
