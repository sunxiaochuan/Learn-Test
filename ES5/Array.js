//额外的数组
// 以下方法添加到了Arrayprototype对象上:
// Array.prototype.indexOf
// Array.prototype.lastIndexOf
// Array.prototype.every
// Array.prototype.some
// Array.prototype.forEach
// Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce
// Array.prototype.reduceRight


// Array.prototype.indexOf   
//方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
let a = [2, 9, 7, 8, 9];
a.indexOf(2); // 0 
a.indexOf(6); // -1
a.indexOf(7); // 2
a.indexOf(8); // 3
a.indexOf(9); // 1
if (a.indexOf(3) === -1) {
    // element doesn't exist in array
}
//语法
// arr.indexOf(searchElement)
// arr.indexOf(searchElement[, fromIndex = 0])
//参数
// searchElement
// 要查找的元素
// fromIndex
// 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
//返回值
// 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

// 以下例子使用indexOf方法确定多个值在数组中的位置。
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// 找出指定元素出现的所有位置
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

//判断一个元素是否在数组里，不在则更新数组
function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
updateVegetablesCollection(veggies, 'spinach');


// Array.prototype.lastIndexOf
// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
//语法与上面的  IndexOf 相同
// 参数

//下例使用 lastIndexOf 定位数组中的值。
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3

//例子：查找所有元素
// 下例使用 lastIndexOf 查找到一个元素在数组中所有的索引（下标），并使用 push 将所有添加到另一个数组中。
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
console.log(indices);
// [4, 2, 0];
// 注意，我们要单独处理idx==0时的情况，因为如果是第一个元素，忽略了fromIndex参数则第一个元素总会被查找。这不同于indexOf方法
// 注：原英文是针对使用三元操作符语句的作用进行说明的：
// idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
// idx > 0时，才进入lastIndexOf由后往前移一位进行倒查找；如果idx == 0则直接设置idx = -1，循环while (idx != -1)就结束了。


// Array.prototype.every
// 方法测试数组的所有元素是否都通过了指定函数的测试。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//语法：
// arr.every(callback[, thisArg])
//参数：
// callback
// 用来测试每个元素的函数。
// thisArg
// 执行 callback 时使用的 this 值。

// 下例检测数组中的所有元素是否都大于 10。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true


// Array.prototype.some
//方法测试数组中的某些元素是否通过由提供的函数实现的测试。有一个通过就会返回 true 否则返回 false
// 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//语法：
// arr.some(callback[, thisArg])
//参数：
// callback
// 用来测试每个元素的函数。
// thisArg
// 执行 callback 时使用的 this 值。

//下面的例子检测在数组中是否有元素大于 10。
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true


// Array.prototype.forEach
//方法对数组的每个元素执行一次提供的函数。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// 语法：
// array.forEach(callback(currentValue, index, array){
//     //do something
// }, this)
// array.forEach(callback[, thisArg])
//参数：
// callback
// 为数组中每个元素执行的函数，该函数接收三个参数：
// currentValue(当前值)
// 数组中正在处理的当前元素。
// index(索引)
// 数组中正在处理的当前元素的索引。
// array
// forEach()方法正在操作的数组。
// thisArg可选
// 可选参数。当执行回调 函数时用作this的值(参考对象)。
// 返回值
// undefined.

//下面的代码会为每一个数组元素输出一行记录：
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, , 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[3] = 9

[2, 5, "", 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = 
// a[3] = 9

[2, 5, undefined, 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9

let xxx;
// undefined
[2, 5, xxx, 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9


//使用thisArg
// 举个勉强的例子，从每个数组中的元素值中更新一个对象的属性：
function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    //console.log(this);
};
var obj = new Counter();
obj.add([1, 3, 5, 7]);
obj.count; // 4 === (1+1+1+1)
obj.sum;// 16 === (1+3+5+7)


//对象复制函数
// 下面的代码会创建一个给定对象的副本。 创建对象的副本有不同的方法，以下是只是一种方法，并解释了Array.prototype.forEach() 是如何使用ECMAScript 5 Object.* 元属性（meta property ）函数工作的。
function copy(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj));//Object.getPrototypeOf 方法返回指定对象的原型（内部[[Prototype]]属性的值）
    //Object.create 方法会使用指定的原型对象及其属性去创建一个新的对象。
    var propNames = Object.getOwnPropertyNames(obj);//方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol(符号)值作为名称的属性）组成的数组
    propNames.forEach(function (name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);//方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
        Object.defineProperty(copy, name, desc);//方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
    });
    return copy;
}
var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // obj2 looks like obj1 now


// Array.prototype.map
//方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ES6
//求数组中每个元素的平方
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(x => x ** 2);
// doubles is now [1, 25, 100, 225]
// numbers is still [1, 5, 10, 15]

//求数组中每个元素的平方根
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//语法：
// let new_array = arr.map(function callback(currentValue, index, array) { 
//     // Return element for new_array 
// }[, thisArg])
// 参数：
// callback
// 生成新数组元素的函数，使用三个参数：
// currentValue
// callback 的第一个参数，数组中正在处理的当前元素。
// index
// callback 的第二个参数，数组中正在处理的当前元素的索引。
// array
// callback 的第三个参数，map 方法被调用的数组。
// thisArg
// 可选的。执行 callback 函数时 使用的this 值。
// 返回值：
// 一个新数组，每个元素都是回调函数的结果。

// 使用 map 重新格式化数组中的对象
//以下代码将一个包含对象的数组用以创建一个包含新重新格式化对象的新数组。
var kvArray = [{ key: 1, value: 10 },
{ key: 2, value: 20 },
{ key: 3, value: 30 }];
var reformattedArray = kvArray.map(function (obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}], 
// kvArray 数组未被修改: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

//下面的例子演示如何在一个 String  上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：
var map = Array.prototype.map;
var a = map.call("Hello World", function (x) {
    return x.charCodeAt(0);
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

//下面代码展示了如何去遍历用 querySelectorAll 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function (obj) {
    return obj.value;
});

//反转字符串
var str = '12345';
Array.prototype.map.call(str, function (x) {
    return x;
}).reverse().join('');
// 输出: '54321'

//使用技巧案例
// 通常情况下，map 方法中的 callback 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 map 只给 callback 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。
// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]
// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.
function returnInt(element) {
    return parseInt(element, 10);
}
['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 意料之中的结果
// 也可以使用简单的箭头函数，结果同上
['1', '2', '3'].map(str => parseInt(str));
// 一个更简单的方式:
['1', '2', '3'].map(Number); // [1, 2, 3]
// 与`parseInt` 不同，下面的结果会返回浮点数或指数:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]


//Array.prototype.filter
// 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 筛选排除掉所有的小值
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// ES6 way
const isBigEnough = value => value >= 10;
let [...spread] = [12, 5, 8, 130, 44];
let filtered = spread.filter(isBigEnough);
// filtered is [12, 130, 44]

//语法：
// var new_array = arr.filter(callback[, thisArg])
//参数：
// callback
// 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
// 返回true表示保留该元素（通过测试），false则不保留。
// thisArg
// 可选。执行 callback 时的用于 this 的值。
//返回值：
// 一个新的通过测试的元素的集合的数组
// ES6：
let [...spread] = [12, 5, 8, 130, 44];
//等同于：let spread = 浅克隆([12, 5, 8, 130, 44]) 
//浅克隆是将属性复制了一遍生成了一个新的对象但是对象的地址还是克隆的对象的原地址，深克隆是把地址也新建一份


//Array.prototype.reduce
//方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//语法：
// arr.reduce(callback[, initialValue])
//参数：
// callback
// 执行数组中每个值的函数，包含四个参数：
// accumulator
// 累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。
// currentValue
// 数组中正在处理的元素。
// currentIndex可选
// 数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
// array可选
// 调用reduce的数组
// initialValue可选
// 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
//返回值：
// 函数累计处理的结果

//数组里所有值的和
var sum = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
}, 0);
// sum is 6
//   你也可以写成箭头函数的形式：
var total = [0, 1, 2, 3].reduce(
    (acc, cur) => acc + cur,
    0
);

//将二维数组转化为一维
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function (a, b) {
        return a.concat(b);
    },
    []
);
// flattened is [0, 1, 2, 3, 4, 5]
// 你也可以写成箭头函数的形式：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, cur) => acc.concat(cur),
    []
);

//计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//使用扩展运算符和initialValue绑定包含在对象数组中的数组
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];
// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, ['Alphabet']);
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

//数组去重
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]


// Array.prototype.reduceRight
// 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
//参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduceright
//与  Array.prototype.reduce() 的执行方向相反
//语法和参数与上面的 Array.prototype.reduce() 一样

//求一个数组中所有值的和
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
    return a + b;
});
// total == 6

//扁平化（flatten）一个元素为数组的数组
let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduceRight((a, b) => {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

//reduce 与 reduceRight 之间的区别
var a = ['1', '2', '3', '4', '5'];
var left = a.reduce(function (prev, cur) { return prev + cur; });
var right = a.reduceRight(function (prev, cur) { return prev + cur; });
console.log(left);  // "12345"
console.log(right); // "54321"



//Dmitry的文章中有一个没有提到，就是Array.isArray, 正如你看到的，这厮直接写在了Array构造器上，而不是prototype对象上。Array.isArray会按照你所期待的那样去做 — 这是一个根据参数的[[Class]]内部属性是否是”Array”返回true或false.
Array.isArray("NO U")
// >> false
Array.isArray(["NO", "U"])
// >> true
// 在ES3中，唯一可靠的确定一个值是数组的方式就是使用“the Miller Device”, 即比对一个数组其内在的[[Class]]属性。
Object.prototype.toString.apply(value) === '[object Array]'



