/*
封装数据库操作通用api
*/
//加载数据库驱动
var mysql      = require('mysql');
exports.base=(sql,data,callback)=>{
	var connection = mysql.createConnection({
  // host     : '192.168.133.128',
  host:'localhost',
  user     : 'root',
  password : '123456',
  database : 'book'
});
//执行连接操作
connection.connect();
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  callback(results);
});
//关闭数据库连接
connection.end();
}
