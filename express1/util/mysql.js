var mysql = require("mysql");

var pool = mysql.createPool({
  host: "106.15.207.114",
  port: "3306",
  user: "root",
  password: "yanzhi@2416",
  database: "yanzhi",
});
pool.getConnection((err) => {
  if (err) {
    console.log("数据库建立连接失败！");
  } else {
    console.log("数据库建立连接成功！");
  }
});

const query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      });
    });
  });
};

// https://www.cnblogs.com/xsilence/p/12444228.html 文档

module.exports = {
  pool,
  query,
};

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
