//一般我们都将入口主文件命名为app
const express = require('express');    //引入框架
const logger = require('morgan');    //日志模块，没有日志模块所以需要下载 npm install morgan --save
// const favicon = require('serve-favicon');    //小图标，npm install serve-favicon --save
const bodyParser = require('body-parser');    //处理post数据 模块
const path = require('path');    //处理路径--404

const route = require('./routes/fileRouter');    //引入路由 模块（路由文件）
const app = express();    //调用express对象

//设置静态资源路径(一定要放在配置之前 最先设置路径)
app.use(express.static(__dirname+'/public'));    //__dirname:指向当前文件的根目录

//配置
app.use(logger('dev'));    //调用日志，配置dev开发模式
app.use(bodyParser.urlencoded({extended:false}));    //调用 读取post数据 模块
app.use(bodyParser.json());    //一般配合上行使用
app.use(route);    //调用 路由模块
app.use((request,response)=>{
    response.status(404);    //status 修改状态码，没有的资源返回404页面
    response.sendFile(path.join(__dirname,"/public","404.html"));    //处理路径的path模块
});

// app.use(favicon(__dirname+"/public/images/favicon.ico"));//配置小图标路径，ico文件百度在线制作就行了
app.set('port',8888);    //端口号理论上任意设置，但是不要使用其他进程占用的端口，例如sql之类的
app.listen(8888,()=>{
    console.log("启动成功，端口号8888")
});

