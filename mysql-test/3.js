const mysql = require("mysql2/promise"); // 直接引入 promise 版本

async function main() {
  try {
    // 创建连接池
    const pool = mysql.createPool({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "123456",
      database: "practice",
    });

    const [rows, fields] = await pool.query(
      "SELECT * FROM customers WHERE name LIKE ?",
      ["李%"]
    );
    console.log(rows);
    console.log(fields.map((item) => item.name));
  } catch (error) {
    console.error("查询失败：", error);
  }
}

main();
