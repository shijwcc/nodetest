const mysql = require('mysql');    //npm install mysql --save
const dbpool = {
    pool:{},
    config:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'rppt',
        database:'basename'
    },
    create(){
        this.pool = mysql.createPool(this.config);
    },
    connect(sql,arr,fn){
        this.pool.getConnection((err,connection)=>{
            connection.query(sql,arr,fn);
            connection.release();  //释放连接
        });
    }
};
dbpool.create();
module.exports = dbpool;