/*
	后台接口开发
*/
const express=require('express');
// const db=require('./db.js');
const router =require('./router.js');
const bodyParser =require('body.parser');
const app=express();
//指定api路径
//json接口
// app.get('/allBooks',(req,res)=>{
// 	let sql='select * from book';
// 	db.base(sql,null,(result)=>{
// 		res.json(result);
// 	});
// });
//jsonp接口
//修改回调函数名称
// app.set('jsonp callback name','cb');
// app.get('/allBooks',(req,res)=>{
// 	let sql='select * from book';
// 	db.base(sql,null,(result)=>{
// 		res.jsonp(result);
// 	});
// });

app.use(router);
app.listen(3000,()=>{
	console.log('running...')
});