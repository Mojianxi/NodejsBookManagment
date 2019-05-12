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

let sql='delete from book where id=?';
let data=[5];
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results); 
  if(results.affectedRows==1){
  	console.log('数据删除成功');
  }
});
//关闭数据库连接
connection.end();