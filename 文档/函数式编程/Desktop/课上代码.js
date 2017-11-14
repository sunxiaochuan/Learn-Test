var s = [20,30,40,78,32];
// var result;
// for (var i = s.length;i<s.length;i++) {
// 	if(s[i]  == 30){
// 		result = i;
// 	}
// 	break;
// }
// s.indexOf(30);
s.map(function(val,index) {
})

var xs = [1,2,3,4,5];
var result1 = xs.splice(0,3);
console.log('xs',xs);
console.log('res',result1);
var result2 = xs.splice(0,3);
console.log('xs',xs);
console.log('res',result2);
// var result2 = xs.slice(0,3);
// var min = 18;
//提纯函数 共有的地方 
function checkages(age) {
	return age>18;
}

// 函数式编程
var checkage = min => (age => age > min);

var checkage = function (min) {
	//接受的参数 => return的值
	return function (age) {
		return age > min;
	}
}
//让纯函数内部的变量 更加灵活 这个参数不依赖于外部的任何变量
var checkage18 = checkage(18);
checkage18(20);

const compose = (f, g) => (x => f(g(x)));


var compose = function (f,g) {
	return function (x) {
		return f(g(x));
	}
}

var first = arr => arr[0]
var reverse = arr => arr.reverse()
var last = compose(first, reverse)
last([1,2,3,4,5]);

const f = str => str.toUpperCase().split(' ');
const q = str => str.trim();


//jquery 
// var versioin = "2.0.1";
var trim = "".trim;

var s = compose(trim(" "),toUpperCase);
s("dsfdff dfdf")；

//导航 起始点的经纬度 计算起始点经纬度里面最近的距离
//经纬度传到远程解析经纬度地址 函数
//计算两个地址之间的位置
//判断是都是跨城 
//火车 飞机 。。 飞机的方式 大航弧线
//
//找到附近的火锅 最近的走法

// {jingdu:,weidu:}
// function jisuan(data) {
// 	return m;
// })

function test(a) {
	if (a == 1) {
		//test = "ok"
		test = function () {
			return "ok"
		}
		return "ok";
	}else{
		test = function (argument) {
			return "no";
		}
		return "no";
	}
}

test(1); 
test(1);


function ajax(){
    if(typeof XMLHttpRequest != "undefined"){
        ajax = function(){
            return new XMLHttpRequest();    
        };
    }else if(typeof ActiveXObject != "undefined"){
        ajax = function(){
            if(typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];    
 
                for(var i=0,k=version.length;i<k;i++){
                    try{
                        var xhr = new ActiveXObject(versions[i]);   
                        arguments.callee.activeXString = versions[i];
                        return xhr;
                    }catch(ex){
                        throw ex;   
                    }
                }
            }   
 
            return new ActiveXObject(arguments.callee.activeXString);
        }
    }else{
        ajax = function(){
            throw "No XHR object";  
        }
    }
 
    return ajax();
}


ajax();
ajax();

function test() {
	arguments.callee();
	//caller
	//call
}

function makePowerFn(power) {  
 	function powerFn(base) {
  		return Math.pow(base, power);
   	}
   return powerFn;
   }
   var square = makePowerFn(2);  
   square(3); // 9  
   square = null;//等待gc的回收机制、

   // .m-15{

   // }
 function test(a) {
 	return a+1
 }

 test(1)

 //对函数进行自动化测试的脚本

 var Container = function(x) {
  	this.__value = x;
}
//函数式编程一般约定，函子有一个of方法
Container.of = x => new Container(x);
//Container.of(‘abcd’);

// Container.prototype.map = function(f){
// 	//别扭 这里面面向对象编程
//  	return Container.of(    f(this.__value)     )
//  }

// Container.prototype.map = function(f) {
//   return this.isNothing() ? Container.of(null) : Container.of(f(this.__value));
// }
// Container.prototype.isNothing = function() {
//   return (this.__value === null || this.__value === undefined);
// }

 // Container.of(3)   //--》生成第一个容器 map对象
 //    .map(x => x + 1)                //=> Container(4)
 //    .map(x => 'Result is ' + x);    //=> Container('Result is 4')
//  class Functor {
//   constructor(val) { 
//     this.val = val; 
//   }

//   map(f) {
//     return new Functor(f(this.val));
//   }
// }

class Functor {
  constructor(val) { 
    this.val = val; 
  }
  map(f) {
    return new Functor(f(this.val));
  }
}
Functor.of = function(val) {
  return new this(val);
};

import _ from 'lodash';
var compose = _.flowRight;

var IO = function(f) {
    this.__value = f;
}
class IO extends Functor {
  join() {
    return this.val;
  }
  map(f){
  	return new IO(compose(f, this.__value))
  }
  flatMap(f) {
    return this.map(f).join();
  }
}
var fs = require('fs');
var readFile = function(filename) {
  return new IO(function() {
  //函数内部
    return fs.readFileSync(filename, 'utf-8');
  });
};

var print = function(x) {
  return new IO(function() {
    console.log(x);
    return x;
  });
}
readFile('./user.txt')
.flatMap(print);




// function addTwo(x) {
//   return x + 2;
// }
// const A = Functor.of(2);
// const B = Functor.of(addTwo);
// class Ap extends Functor {
//   ap(F) {
//     return Ap.of(this.val(F.val));
//   }
// }
// Ap.of(addTwo).ap(Functor.of(2) );

// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));
// Ap.of(addTwo) => AP(this.__value) ->addTwo
// Functor.of(2)=>  AP(this.__value) ->2
// ap()=>

//函子A的值是2 函子B想用
// class Maybe extends Functor {
//   map(f) {
//     return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
//   }
// }

// Maybe.of(null).map(function (two) {
//   return two + 2;
// });
// class Either extends Functor {
//   constructor(left, right) {
//     this.left = left;
//     this.right = right; //正常情况的值
//     //如果左跟右都没有 就使用默认值
//   }

//   map(f) {
//   	//1==1  ？变形函数（值） ：
//     return this.right ? 
//       Either.of(this.left, f(this.right)) :
//       Either.of(f(this.left), this.right);
//   }
// }

// Either.of = function (left, right) {
//   return new Either(left, right);
// };

// var addOne = function (x) {
//   return x + 1;
// };

// Either.of(5, 6).map(addOne);
// // Either(5, 7);

// Either.of(1, null).map(addOne);

// //真实业务场景
// Either
// .of({address: 'xxx'}, currentUser.address)
// .map(updateField);
// // Either(2, null);
// // 
// // function parseJSON(json) {
//   try {
//     return Either.of(null, JSON.parse(json));
//   } catch (e: Error) {
//     return Either.of(e, null);
//   }
// }

// Maybe if
// Either  if else