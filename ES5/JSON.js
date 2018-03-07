//ES5提供一个全局的JSON对象，用来序列化(JSON.stringify)和反序列化(JSON.parse)对象为JSON格式。
// 对于老的浏览器，可以考虑使用Douglas Crockford的json2.js(https://github.com/douglascrockford/JSON-js/blob/master/json2.js), 可以让旧的浏览器实现同样的功能（原始支持功能测试后）。

//语法：JSON.parse(text[,reviver])
//JSON.parse接受文本(JSON格式)并转换成一个ECMAScript值。该可选的reviver参数是有带有key和value两个参数的函数，其作用于结果——让过滤和转换返回值成为可能。
//example
//接收一个 JSON 格式的文本(文本格式必须是固定的 比如说 a 和 b 必须是 string ) 将其转换为相应的 Object 对象
var result1 = JSON.parse('{"a":1,"b":"2"}');
console.log(result1);//Object   {a: 1, b: "2"}

//对文本内部进行过滤/转换值
var result2 = JSON.parse('{"a":1,"b":"2"}',function(key,value){
    if(typeof value == 'string'){
        // return undefined;//将第二个 b 过滤掉   最后输出 {a: 1}
        return parseInt(value);//将第二个 b 的 value 转换为整数类型   最后输出 {a: 1, b: 2}
    }else{
        return value;
    }
});
console.log(result2);//过滤 和 转换输出的结果是不一样的看上面相应的注释


//语法：JSON.stringify(value [, replacer [, space]])
// JSON.stringify允许接受一个ECMAScript值然后转换成JSON格式的字符串。 在其最简单的形式中，JSON.stringify接受一个值返回一个字符串
var name1 = JSON.stringify({man:'xiaochuan'});
console.log(name1);//'{"man":"xiaochuan"}'
console.log(typeof name1);//string
console.log(JSON.parse(name1));//{man: "xiaochuan"}  
//总结：JSON.parse() 和 JSON.stringify() 这两个方法是可以互相的进行转换的

//对文本内部进行过滤/转换值
var name2 = JSON.stringify({man:'xiaochuan',age:22},function(key,value){
    if(value === 22){
        // return undefined;//将第二个 age 过滤掉   最后输出 '{"man":"xiaochuan"}'
        return ++value;//将第二个 age 的 value +1  最后输出 '{"man":"xiaochuan","age":23}'
    }else{
        return value;
    }
},2);//可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明了作缩进的JSON字符串或字符串每个水平上缩进的空格数。如果参数是个超过10的数值，或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。
// '{
//     "man": "xiaochuan",
//     "age": 23
//   }'
console.log(name2);
console.log(typeof name2);