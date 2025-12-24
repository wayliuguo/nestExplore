const mysql = require("mysql2");

// 普通连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "practice",
});

connection.connect((err) => {
  if (err) {
    console.error("连接失败：", err);
    return;
  }
  console.log("数据库连接成功！");
});

connection.query("SELECT * FROM customers", function (err, results, fields) {
  console.log(results);
  console.log(fields.map((item) => item.name));
});

connection.query(
  "SELECT * FROM customers WHERE name LIKE ?",
  ["李%"],
  function (err, results, fields) {
    console.log(results);
    console.log(fields.map((item) => item.name));
  }
);

connection.end((err) => {
  if (err) console.error("关闭连接失败：", err);
});
