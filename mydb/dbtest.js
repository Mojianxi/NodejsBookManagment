/*
测试数据库封装api
*/
const db=require('./db.js');
//插入操作
// let sql='insert into book set ?';
// let data={
// 	name:'笑傲江湖',
// 	author:'金庸',
// 	category:'武侠小说',
// 	description:'华山派大弟子的成才路'
// }
// db.base(sql,data,(result)=>{
// 	console.log(result);
// });
//更新操作
// let sql='update book set name=?,author=?,category=?,description=? where id=?';
// let data=['天龙八部','金庸','武侠小说','结义三兄弟闯荡武林的故事',7];
// db.base(sql,data,(result)=>{
// 	console.log(result);
// });
//删除操作
// let sql='delete from book where id=?';
// let data=[7];
// db.base(sql,data,(result)=>{
// 	console.log(result);
// })
//查询数据库
let sql='select * from book where id=?';
let data=[5];
db.base(sql,data,(result)=>{
	console.log(result[0].name);
})