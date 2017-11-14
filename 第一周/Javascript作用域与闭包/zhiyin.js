function test(obj) {
	//这里对num这个变量创建了一个内存的副本 操作这个与外部的毫不相干  按值传递
	//当前obj对内存的这个地址指向同一个  按引用传递
	// var num = num + 1;
	// return num;
	obj.age = "20";
	console.log("内部的onj",obj);//内部的onj Object {name: "xiaoming", age: "20"}
}
// var num = 1;
// alert(test(num));
// alert(num);
var obj = {
	name:"xiaoming"
}
test(obj);
console.log(obj);//Object {name: "xiaoming", age: "20"}
//js对象 object array
//按值传递  string number boolean