const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false,
  auth: {
    user: "xx@qq.com",
    pass: "授权码",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"xxx" <xx@qq.com>',
    to: "xx@qq.com",
    subject: "happy every day!",
    html: fs.readFileSync("./content.html"),
  });

  console.log("邮件发送成功：", info.messageId);
}

main().catch(console.error);
