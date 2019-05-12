const express =require('express');
const template=require('art-template');
const path=require('path');
const app=express();
//设置模板引擎的路径
app.set('views',path.join(__dirname,'views'));
//设置模板引擎
app.set('view engine','art');
app.engine('art', require('express-art-template'));

app.get('/list',(req,res)=>{
	let data={
		title:'水果',
		list:['apple','orange','banana']
	}
	//第一个参数是模板名称,第二个参数是传递到模板的内容
	res.render('list',data);
});
app.listen(3000,()=>{
	console.log("running...");
});