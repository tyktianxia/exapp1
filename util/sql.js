var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host: '106.15.207.114',
//     port: '3306',
//     user: 'root',
//     password: 'yanzhi@2416',
//     database: 'yanzhi',
// });
// conn.connect((err) => {
//     if (err) {
//         console.log("Mysql连接失败！")
//     } else {
//         console.log("Mysql连接成功！")
//     }
// });
// const sql1 = "select * from user"
// conn.query(sql1, function (err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows);
// });
// conn.end((err) => {
//     if (!err) {
//         console.log("Mysql 关闭成功！")
//     }
// });

var pool = mysql.createPool({
    host: '106.15.207.114',
    port: '3306',
    user: 'root',
    password: 'yanzhi@2416',
    database: 'yanzhi',
})
console.log(pool._allConnections.length); //  

pool.getConnection((err, connection) => {
    if (err) {
        console.log("数据库建立连接失败！")
    } else {
        console.log("数据库建立连接成功！")
        console.log(pool._allConnections.length); //  1
        connection.query("select * from SCORE", (err, rows) => {
            if (err) {
                console.log("查询失败",err)
            } else {
                console.log(rows)
            }
            connection.destroy();  // 销毁
        })
    }
})

console.log("third",pool._allConnections.length); //  1

// https://www.cnblogs.com/xsilence/p/12444228.html 文档