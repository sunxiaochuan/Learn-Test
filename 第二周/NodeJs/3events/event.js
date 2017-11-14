//引入 Event 模块，并创建 eventsEmitter 对象
var events = require('events');
var eventEmitter = new events.EventEmitter();

//绑定事件处理函数
var connctHandler = function connected() {
	console.log('connected被调用！');
}
//connection  为事件名    connctHandler  为函数名
eventEmitter.on('connection',connctHandler);//完成事件绑定

//触发事件    
//告诉 emit 函数需要触发的是 connection 事件
//执行 emit 函数时执行的是 connctHandler() 函数
eventEmitter.emit('connection');

console.log('程序执行完毕');
