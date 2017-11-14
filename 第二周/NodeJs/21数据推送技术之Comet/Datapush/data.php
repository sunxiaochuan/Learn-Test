<?php
//设置输出数据的格式 编码格式
header('Content-type: application/json;charset=utf-8');
// 对当前文档禁用缓存
header('Cache-Control:max-age=0');

//前端实现方法
// $res = array('success'=>'ok','text'=>'我是测试的代码');
// sleep(1);
// echo json_encode($res);

//后端实现方法 2
while (true) {
	$res = array('success'=>'ok','text'=>'我是测试的代码');
	sleep(1);
	echo json_encode($res);
	exit();
}
//后端实现方法 1
// $i = 0;
// while ($i < 9) {
// 	$i++;
// 	// $res = array('success'=>'ok','text'=>'我是测试的代码');
// 	// echo json_encode($res);
// 	// 每次执行之前睡 1s
// 	sleep(1);
// 	// 获取一个 1~999 的随机数
// 	$radom = rand(1,999);
// 	echo $radom;
// 	echo "<br/>";
// 	//把当前的资源给释放掉的属性 也算是输出
// 	ob_flush();
// 	//拿到上面释放的资源 然后吐给浏览器
// 	flush();
// }

?>