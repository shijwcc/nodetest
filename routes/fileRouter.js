//路由文件的作用是拦截请求，判断请求类型，然后分发任务
//请求类型一般分为 get post put delete等
const express = require('express');    //同样的引入express
const userControlle = require('../controller/fileController');    //引入控制层文件
const router =express.Router();    //获取express的路由对象

router.get('/login.do',userControlle.getUser);    //参数：1.拦截地址 2.回调函数 （调用控制层文件的getUser方法）
router.post('/login1.do',userControlle.postUser);    //post请求相同，调用postUser方法
//这边

module.exports = router;    //全局公开 router（上述获取的路由对象）