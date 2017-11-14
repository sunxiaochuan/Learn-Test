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



//高阶语法

//Iterator 遍历
//Generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次
//1.类似于将异步变成同步，使函数可以按顺序依次执行，用的已经不多了，有新的东西替代了
let xiaochuan = function*(){
	yield "冰淇淋";
	yield "汉堡";
}
// console.log(xiaochuan().next());//Object {value: "冰淇淋", done: false}
const result =  xiaochuan();
console.log(result.next());//Object {value: "冰淇淋", done: false}
console.log(result.next());//Object {value: "汉堡", done: false}
console.log(result.next());//Object {value: undefined, done: true}

//for of  遍历数组中的每一个元素 这种方法只支持数组不支持 object
const arr = ['橘子','苹果','香蕉'];
for (let v of arr) {
	console.log(v);//橘子
					//苹果
					//香蕉
}
//for in  遍历数组中的索引 ES5的方法
const arr = ['橘子','苹果','香蕉'];
for (var i in arr) {
	console.log(i);//0
					//1
					//2
}


//Class 
//新建父类
class Person{
	constructor(age){
		this.age = age;
	}
	test(){
		console.log(`小川的年龄是${this.age}`);
	}
}
// const xiaochuan = new Person(30);
// // console.log(xiaochuan.age);//30
// // xiaochuan.test();//小川的年龄是30

//新建继承自父类 Person 的子类 Man 
//super  set  get   static
class Man extends Person{
	//重写父类的 constructor
	constructor(age){
		//super 调用父类相应的方法  constructor 不能写方法名
		super(age);
		this.arr = [];
	}
	set menu(data){
		this.arr.push(data);
	}
	get menu(){
		return this.arr;
	}
	test(){
		//super调取父类方法时 不是 constructor 需要写上  方法名
		super.test();
		console.log('Hello');
	}
	//静态方法
	static init(){
		console.log('static');
	}
}
// Man.init();//static
// const xiaochuan2 = new Man(30);
// console.log(xiaochuan2.age);//30
// // xiaochuan2.test();//小川的年龄是30
// //重写 test 后
// xiaochuan2.test();//小川的年龄是30
// 					//Hello
// xiaochuan2.menu = "西红柿";//设置 menu
// console.log(xiaochuan2.menu);//["西红柿"]     menu 取值


//Set
let arr  = new Set('汉冰热');
arr.add('曲奇');
arr.add('曲奇');

// console.log(arr);//Set {"汉", "冰", "热", "曲奇"}   add 添加同一个东西后面添加的会被忽略掉
// console.log(arr.size);//4
// console.log(arr.has('汉'));//true
// arr.delete('汉');
// console.log(arr.has('汉'));//false
// for(let v of arr){
// 	console.log(v);//汉
// 					//冰
// 					// 热
// 					// 曲奇
// }
arr.clear();
console.log(arr.size);//0


//Map
let food = new Map();
let fruit = {},cook =function () {};
food.set(fruit,'柠檬');
food.set(cook,'汉堡');
// console.log(food);//Map {Object {} => "柠檬", function => "刀叉"}
// console.log(food.get(fruit));//柠檬
// console.log(food.get(cook));//汉堡
// console.log(food.size);//2
// food.delete(fruit);
// console.log(food.size);//1
food.clear();
console.log(food);


//数组去重 demo
const arr =[12,53,52,12,15,6];
const result = [...new Set(arr)];
console.log(result);//[12, 53, 52, 15, 6]


//Modele 模块
//引用 jquery 模块
import jquery from 'jquery';

//示例 
//写法1 
const test = function test() {
	
}
//这样写了之后 另一个脚本 info.es 文件便可以引入这个方法
//引用方法查看 info.es 文件
export test;
const gogo = function gogo() {
	
}
export gogo;
export {test,gogo};

//写法2
export default{test,gogo};



//async 函数  主要是为了进行更好的异步加载 整合
//参考链接:http://es6.ruanyifeng.com/#docs/async
//:http://es6.ruanyifeng.com/#docs/promise
//示例
(async(){
	function promisefn(url) {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url:url,
				success:function() {
					resolve(response);
				},
				error:function() {
					reject('error');
				}
			});
		});
	};
	const a1 = await promisefn('http://www.xxx.com/a');
	const a2 = await promisefn('http://www.xxx.com/b');
	let p =  a1 + a2;
	console.log(p);
})();

