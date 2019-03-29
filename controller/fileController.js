//在控制层连接数据库方法借鉴注释 1
// 1 const mysql = require('mysql');    //npm install mysql --save

const userModel = require('../model/userDao');//引入模型层文件
const userController={  //控制层处理请求的方法
    // requset.query.字段 (get请求获取参数方法)
    // request.body.字段  (post获取参数方法)
    getUser(requset,response){
        userModel.gete_name([]).then((data)=>{
            //链接到数据库查询经过dao层拿到数据之后一顿操作
            //然后 .then回调  把参数丢到页面上
            response.render("goodxx", data);
        });
    },
    test2(requset,response){
        response.send({
            // data: '使用public方法调用'
            data: [
                {id: '001', name: '老王', address: '隔壁'},
                {id: '002', name: '老李', address: '隔壁'},
                {id: '003', name: '老大', address: '隔壁'},
                {id: '004', name: '老二', address: '隔壁'},
                {id: '005', name: '老三', address: '隔壁'}
            ]
        });
    },
    test3(requset,response){
        response.send({
            data: '删除成功'
        });
    },
    postUser(request,response){
        console.log('ye im in')
        response.send({
            data: '直接调用全局ajax方法'
        });

        // 1.创建一个连接对象
        // const db = mysql.createConnection({
        //      host:'localhost',
        //      port:'3306',
        //      user:'root',
        //      password:'rppt',
        //      database:'basename'
        // });
        // 1.发起连接
        // db.connect();
        // 1.发起sql语句请求 参数：sql语句，sql参数，回调函数。
        // db.query('select ..... where username = ? and pwd = ?',
        //     [username,passwprd],(err,data)=>{
        //         if(data != undefined){
        //             response.redirect("success.html")
        //         }else{
        //             response.send("失败")
        //         }
        //         db.end();
        //     })
    }
};
module.exports = userController;

//数据库配置文件参数一般都是在安装sql时的配置，一定要记住
//忘记了挺麻烦的，sql重装过程容易出错，导致本机出现许多问题
