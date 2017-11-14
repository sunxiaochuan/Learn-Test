//Uncaught ReferenceError: j is not defined
//undefined
//js是函数级别作用域 在内部的变量 内部都能访问 外部不能访问内部的 内部能访问外部 的
// var j
// test();	
// j = 1000;
// function test(){
// 	if(false){
// 		var i = 10
// 	}else{
// 		var t = 100;
// 	}
// 	console.log(i);//undefineds
// 	console.log(j);//undefined
// 	console.log(t);//100
// }
// console.log(t);//Uncaught ReferenceError: t is not defined

// var j = 100;
// ~(function test() {
// 	console.log(j);
// })();//~ ()可以是函数变为表达式 然后自执行

// var j = 100;
// function test() {
// 	alert(j);
// 	var j;
// }
// test();//undefined  

/*********************************************************/
//闭包  他就是拿到本不该属于他的东西
// var j = 100;
// function test() {
// 	var j;
// 	j = 10;
// 	var  k =  1000;
// 	return function () {
// 		return k;
// 	}
// }
// var t = test()();
// alert(t);