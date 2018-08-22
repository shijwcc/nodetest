const db = require('../config/dbpoolconfig');//引入连接池文件
const userModel = {
    DaoAddUser(params,callback){
        db.connect("sql",params,(err,data)=>{
                if (!err){
                    callback(data)
                }
            })
    },
    gete_name(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select e_name from s_good where good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
};
module.exports = userModel;