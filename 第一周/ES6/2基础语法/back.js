//*****************需要掌握的语法***************//
//const let 块级的 常量与变量
//1.const 可以提醒大家 不能被改变
//2.const  比较符合函数式编程
//3.js 编译器对 const 进行了优化 
//4.本质的区别 编译器内部处理机制
//const a = "苹果";
let a = '苹果';
console.log(a);


//解构
//数组
const s = ['苹果','香蕉','橘子'];
const [first,second,three] = s;
console.log(three);
//对象
function test() {
	return{
		age:22,
		b:2
	}
}
const result = test();
const {b,age} = result;
console.log(age);


//字符串
const s = 'hello';
const e = 'world';
// const c = `foor ${s} ${e} bar`;
// console.log(c);//foor hello world bar    拼接字符串
//console.log(c.startsWith('foo'));//true  判断字符串 c 是否是以 foo 开始
//console.log(c.endsWith('foo'));//false  判断字符串 c 是否是以 foo 结尾
// console.log(c.includes('ello'));//true  判断字符串 c 是否包含 ello 字符

const c = test `foor ${s} ${e} bar`;
// function test(strs) {
// 	console.log(strs);//["foor ", " ", " bar", raw: Array[3]]
// }
function test(strs,...values) {
	console.log(values);//["hello", "world"]
}


//数组
const s ='呵呵哭哭';
const result = Array.from(s);//Array.from(s) 将一个类似于数组的东西变成数组
console.log(result);//["呵", "呵", "哭", "哭"]

const s ='呵呵哭哭';
const test = ['树','花朵',...s];//...s  将 s 中的元素以数组的形式 添加到 test 数组中
console.log(test);//["树", "花朵", "呵", "呵", "哭", "哭"]


//对象

//对象1
//将数组传入对象中
const s ='呵呵哭哭';
const test = ['树','花朵',...s];//...s  将 s 中的元素以数组的形式 添加到 test 数组中
const k ='arr';
const result = {
	k1:1,
	//s ->  s:s      test->   test:test
	s,
	test,
	//函数无需再写  function
	q(){
		console.log('企鹅');
	},
	//属性名还可以是拼接的字符串
	[k+1]:2
}
// console.log(result);//Object {k1: 1, s: "呵呵哭哭", test: Array[6]}
// result.q();//企鹅
console.log(result);//Object {k1: 1, s: "呵呵哭哭", test: Array[6], arr1: 2}

//对象2
const a = {x:null};//定义对象时如果是后面需要添加的属性最好先将其写上
a.x = 3;
console.log(a);//Object {x: 3}

//对象3   获取/设置原型链方法
// console.log(NaN == NaN);//false
// console.log(Object.is(NaN,NaN));//true
const eat = {
	getEat(){
		return '吃';
	}
}
const drink = {
	getDrink(){
		return '喝';
	}
}
let sunday = Object.create(eat);
// console.log(sunday);//  原型链方法为  getEat()
// console.log(sunday.getEat());//吃
// console.log(Object.getPrototypeOf(sunday));// getEat()   获取原型链方法
Object.setPrototypeOf(sunday,drink);//设置原型链方法为 drink 对象的原型链方法 getDrink()  之前的 getEat() 方法便不存在了
//console.log(sunday);//Object {}  此时的原型链方法为 getDrink() 之前的 getEat() 没有了
// console.log(Object.getPrototypeOf(sunday));//获取原型链方法 此时的方法已经被设置成了 getDrink() 
console.log(sunday.getDrink());//喝  

//对象4
const eat = {
	getEat(){
		return '吃';
	}
}
const drink = {
	getDrink(){
		return '喝';
	}
}
let sunday = {
	__proto__:eat
}
console.log(sunday.getEat());//吃
sunday.__proto__ = drink;
console.log(sunday.getDrink());//喝
console.log(sunday);//原型链的方法为 getDrink()

//对象5
const eat = {
	getEat(){
		return '吃';
	}
}
const drink = {
	getDrink(){
		return '喝';
	}
}
let sunday = {
	__proto__:drink,
	getDrink(){
		//super  调用父类的方法
		return super.getDrink() + '咖啡'
	}
}
console.log(sunday.getDrink());//喝咖啡


//函数
//函数1
const fn = function pp(argument) {
	
}
console.log(fn.name);//pp

//箭头函数
//箭头函数1
// (()=>{
// 	console.log('fn init');
// })();//自执行函数
// (1=>2)();//报错  Uncaught SyntaxError: Unexpected number
//老的写法
const result = [1,2,3].map(function(index){
	return index * 3;
});

//箭头函数2
const result = [1,2,3].map((index)=> index *3);
console.log(result);//[3, 6, 9]

// 箭头函数3
window.a = 30;
const s ={
	a:40,
	p:function() {
		const qq ={
			a:50,
			test:()=>{
				console.log(this.a);//箭头函数内部的this 会一直往上找知道 找到 function 这个 this 就相当于是 这个function 内部的this 指向的对象
			}
		}
		qq.test();
	}
}
s.p();//40

//箭头函数4
// function test(a=1,{options=true}={}) {
// 	console.log(a + ' ' + options);
// }
// test(30,{options:false});//30 false

function test(...results) {
	console.log(results);
}
test(30,{options:false});//[30, Object]
