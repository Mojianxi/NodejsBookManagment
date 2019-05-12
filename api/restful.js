/*
restful api 是根据url的格式来定义的
delete http://localhost:3000/books/book/2
*/
const express=require('express');
const db=require('./db.js');
const app=express();
// app.get('/books',(req,res)=>{
// 	let sql='select * from book';
// 	db.base(sql,null,(result)=>{
// 		res.json(result);
// 	});
// });

app.get('/books/book/:id',(req,res)=>{
	let id=req.params.id;
	let sql='select * from book where id=?';
	let data=[id];
	db.base(sql,data,(result)=>{
		res.json(result[0]);
	});
});

app.listen(3000,()=>{
	console.log('running...');
});