/*
路由模块
*/
const express=require('express');
const router=express.Router();
const service=require('./service.js');
//路由处理,把路由绑定到业务上,渲染主页数据
router.get('/',service.showIndex);
//添加图书,跳转到修改图书的页面
router.get('/toAddBook',service.toAddBook);
//添加图书,提交表单
router.post('/addBook',service.addBook);
//跳转到编辑图书的页面
router.get('/toEditBook',service.toEditBook);
//编辑之后提交表单
router.post('/editBook',service.editBook);
router.get('/deleteBook',service.deleteBook);
module.exports=router;