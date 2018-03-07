//附加对象
//下面的方法是添加到Object上的构造器：
// Object.getPrototypeOf
// Object.getOwnPropertyDescriptor
// Object.getOwnPropertyNames
// Object.create   重点
// Object.defineProperty
// Object.defineProperties
// Object.seal
// Object.freeze
// Object.preventExtensions
// Object.isSealed
// Object.isFrozen
// Object.isExtensible
// Object.keys   重点


//Object.defineProperty  控制对象的属性
var cat = {};
Object.defineProperty(cat, "name", {
	value: "Maru",
	writable: false, //可读
	enumerable: true, //可枚举
	configurable: false //可配置
});
Object.defineProperty(cat, "skill", {
	value: "exploring boxes",
	writable: true,
	enumerable: true,
	configurable: true
});
// 对于我们的cat对象, 其名字name不能被改变，但是会出现在for-in循环中。在其他方面，Maru擅长探索盒子(exploring boxes), 但是可以在将来改变，因为skill属性是writable和configurable的。


// Object.create   重点
//参考地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
//返回值：一个新对象，带着指定的原型对象和属性。
// 用 Object.create实现类式继承
// Shape - 父类(superclass)
function Shape() {
	this.x = 0;
	this.y = 0;
}
// 父类的方法
Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};
// Rectangle - 子类(subclass)
function Rectangle() {
	Shape.call(this); // call super constructor.
}
// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// 因为使用“.prototype =...”后,constructor会改变为“=...”的那个
// constructor，所以要重新指定.constructor 为自身。

var rect = new Rectangle();
console.log('Is rect an instance of Rectangle?',
	rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
	rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'



//Object.keys   重点
// 返回值：一个表示给定对象的所有可枚举属性的字符串数组。
/* Array 对象 */
let arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// ['0', '1', '2']

/* Object 对象 */
let obj = {
		foo: "bar",
		baz: 42
	},
	keys = Object.keys(obj);
// CCAC: Chrome Console Auto Copy
copy(keys);
// ["foo","baz"]

/* 类数组 对象 */
let obj = {
	0: "a",
	1: "b",
	2: "c"
};
console.log(Object.keys(obj));
// ['0', '1', '2']

// 注意：
var obj = {
	0: "a",
	1: "b",
	2: {
		3: "c",
		4: "d"
	}
};
console.log(Object.keys(obj));
// (3) ["0", "1", "2"]

// 类数组 对象, 随机 key 排序 
let anObj = {
	100: 'a',
	2: 'b',
	7: 'c'
};

console.log(Object.keys(anObj));
// ['2', '7', '100']

/* getFoo 是个不可枚举的属性 */
var my_obj = Object.create({}, {
	getFoo: {
		value: function() {
			return this.foo
		}
	}
});
my_obj.foo = 1;

console.log(Object.keys(my_obj));
// ['foo']