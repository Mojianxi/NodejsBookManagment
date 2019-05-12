/*
业务模块
*/
const data=require('./data.json');
const path=require('path');
const fs=require('fs');
//自动生成图书编号,自增
let maxBookCode=()=>{
	let arr=[];
	data.forEach((item)=>{
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}
//渲染主页面
exports.showIndex=(req,res)=>{
	res.render('index',{list:data});
}
//跳转添加图书的页面
exports.toAddBook=(req,res)=>{
	res.render('addBook',{});
}
//修改图书提交表单
exports.addBook=(req,res)=>{
	//获取表单提交的数据
	let info=req.body;
	let book={};
	for(let key in info){ 
		book[key]=info[key];
	}
	book.id=maxBookCode()+1;
	data.push(book); 
	//把内存中的数据写入文件
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server error');
		}
		//文件写入成功重新跳转到主页面
		res.redirect('/');
	});
}

//跳转修改图书页面
exports.toEditBook=(req,res)=>{
	let id=req.query.id;
	let book=null;
	//需要把当前书籍的id传递到页面
	data.forEach((item)=>{
		if(id==item.id){
			book=item;
			return;
		}
	});
	res.render('editBook',book);
}
//编辑图书提交数据
exports.editBook=(req,res)=>{
	let info=req.body;
	data.forEach((item)=>{
		if(info.id==item.id){
			for(let key in info){
				item[key]=info[key];
			}
			return; 
		}
	});
	//把内存中的数据写入文件
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server error');
		}
		//文件写入成功重新跳转到主页面
		res.redirect('/');
	});
}
//删除图书
exports.deleteBook=(req,res)=>{
	let id=req.query.id;
	let book=null;
	data.forEach((item)=>{
		if(id==item.id){
			book=item;
			data.pop(book);
		}
	});
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server error');
		}
		//文件写入成功重新跳转到主页面
		res.redirect('/');
	});
}