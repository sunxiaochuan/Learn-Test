//阻塞代码 
// //引入 fs 库
// var fs = require('fs');
// //声明一个变量接收 fs 同步读取的文件 data.txt 的内容
// //这里必须是读取完成之后才会执行下面的代码  同步执行
// var data = fs.readFileSync('data.txt');
// //输出这个文件的内容 
// console.log(data);
//  // data 默认保存的是十六进制的内容 需要进行转换  不识别中文
//  console.log(data.toString());


//非阻塞代码
var fs = require('fs');
//异步调用  参数：文件名、匿名函数(作用就是回调函数)
//程序执行到这里并没有等待这个结果而是直接向下执行了  所以最后代码执行时先输出的是  程序执行完毕   最后才输出的是 data 
fs.readFile('data.txt',function (err,data) {
	//容错
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
})

console.log('程序执行完毕');
//代码执行结果：程序执行完毕
				  //ABCDEFG