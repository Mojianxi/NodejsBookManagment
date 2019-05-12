//加载数据库驱动
var mysql      = require('mysql');
//创建数据库连接
var connection = mysql.createConnection({
  host     : '192.168.133.128',
  user     : 'root',
  password : 'root',
  database : 'book'
});
//执行连接操作
connection.connect();

let sql='insert into book set ? ';
let data={
	name:'明朝那些事',
	author:'当年明月',
	category:'文学',
	description:'明朝的历史'
}
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results); 
  if(results.affectedRows==1){
  	console.log('数据插入成功');
  }
});
//关闭数据库连接
connection.end();