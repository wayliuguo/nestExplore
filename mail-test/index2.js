// 引入核心依赖库
// mailparser：专业的邮件解析库，用于解析邮件头、正文、附件等内容
const { MailParser } = require("mailparser");
// fs：Node.js内置文件系统模块，用于文件的读写操作
const fs = require("fs");
// path：Node.js内置路径模块，用于处理跨平台的文件路径拼接（避免路径分隔符问题）
const path = require("path");
// imap：IMAP协议客户端库，用于连接邮箱服务器、搜索/获取邮件
const Imap = require("imap");

// ===================== 配置项（需根据实际情况修改）=====================
// 创建IMAP客户端实例，配置QQ邮箱连接参数
var imap = new Imap({
  user: "xxx@qq.com", // QQ邮箱账号（替换为你的邮箱）
  password: "授权码", // 注意：不是QQ登录密码，是QQ邮箱IMAP/SMTP授权码（需在邮箱设置中开启）
  host: "imap.qq.com", // QQ邮箱IMAP服务器地址（固定值，无需修改）
  port: 993, // IMAP over TLS的默认端口（固定值，无需修改）
  tls: true, // 启用TLS加密，保证连接安全（必须开启）
  tlsOptions: { rejectUnauthorized: false }, // 忽略自签名证书错误（某些环境下需要）
});

// ===================== 核心逻辑：连接就绪后执行 =====================
// 监听IMAP连接"就绪"事件（仅触发一次）：当客户端成功连接并认证通过后执行
imap.once("ready", () => {
  console.log("IMAP连接已就绪，开始打开收件箱...");
  // 打开邮箱的"收件箱"（INBOX），第二个参数为true表示只读模式（避免误操作邮件）
  imap.openBox("INBOX", true, (err) => {
    if (err) {
      console.error("打开收件箱失败：", err);
      return imap.end(); // 失败则关闭连接
    }
    console.log("收件箱打开成功，开始搜索符合条件的邮件...");

    // 定义邮件搜索条件
    // 条件1：["SEEN"] 筛选已读邮件（未读邮件用["UNSEEN"]）
    // 条件2：["SINCE", 日期] 筛选指定时间之后收到的邮件
    const searchConditions = [
      ["SEEN"],
      ["SINCE", new Date("2026-01-19 00:00:00").toLocaleString()],
    ];

    // 执行邮件搜索
    imap.search(searchConditions, (err, results) => {
      if (err) {
        console.error("邮件搜索失败：", err);
        return imap.end(); // 失败则关闭连接
      }
      console.log(`搜索到 ${results.length} 封符合条件的邮件`);
      if (results.length === 0) {
        return imap.end(); // 无邮件则关闭连接
      }
    });
  });
});

// ===================== 错误监听与连接启动 =====================
// 监听IMAP连接错误事件
imap.on("error", (err) => {
  console.error("IMAP连接错误：", err);
});

// 监听IMAP连接关闭事件
imap.on("end", () => {
  console.log("IMAP连接已关闭");
});

// 启动IMAP连接（核心：建立与QQ邮箱服务器的连接）
console.log("正在连接QQ邮箱IMAP服务器...");
imap.connect();
