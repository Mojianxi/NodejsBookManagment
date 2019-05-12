/*
业务模块
*/
const data=require('./data.json');
const path=require('path');
const fs=require('fs');
const db=require('./db.js');
//自动生成图书编号,自增
let maxBookCode=()=>{
	let arr=[];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}
//渲染主页面
exports.allBooks=(req,res)=>{
	let sql='select * from book';
	db.base(sql,null,(result)=>{
		res.json(result);
	});
}
//跳转添加图书的页面
// exports.toAddBook=(req,res)=>{
// 	res.render('addBook',{});
// }
//添加图书提交表单
exports.addBook=(req,res)=>{
	//获取表单提交的数据
	let info=req.body;
	let sql='insert into book set ?';
	console.log('添加图书');
	db.base(sql,info,(result)=>{
		if(result.affectedRows==1){
			res.json({flag:1});
		}else{
			res.json({flag:2});
		}
	});
}

//跳转修改图书页面
exports.getBookById=(req,res)=>{
	let id=req.params.id;
	let sql='select * from book where id=?';
	let data=[id];
	db.base(sql,data,(result)=>{
		res.json(result[0]);
	});
}
//编辑图书提交数据
exports.editBook=(req,res)=>{
	let info=req.body;
	let sql='update book set name=?,author=?,category=?,description=? where id=?';
	let data=[info.name,info.author,info.category,info.description,info.id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows==1){
			res.json({flag:1});
		}else{
			res.json({flag:2});
		}
	})
}
//删除图书
exports.deleteBook=(req,res)=>{
	let id=req.params.id;
	let sql='delete from book where id=?';
	let data=[id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows==1){
			res.json({flag:1});
		}else{
			res.json({flag:2});
		}
	})
}