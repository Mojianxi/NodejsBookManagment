/*
操作数据库基本步骤
*/
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
//操作数据库
connection.query('SELECT count(*) as total from book', function (error, results, fields) {
  if (error) throw error;
  console.log('表 book 中共有', results[0].total+'条数据'); 
});
//关闭数据库连接
connection.end();