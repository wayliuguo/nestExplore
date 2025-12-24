const mysql = require("mysql2");

// 创建连接池
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "practice",
});

pool.query("SELECT * FROM customers", function (err, results, fields) {
  console.log(results);
  console.log(fields.map((item) => item.name));
});

// 连接池无需手动关闭，程序退出时自动释放
