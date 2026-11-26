// 练习一：HelloWorld 网站（Node.js + Express，无数据库）
// 运行命令：npm install && npm start
// 访问地址：http://localhost:3000

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 托管 public 目录下的静态页面
app.use(express.static(path.join(__dirname, 'public')));

// 根路由：返回 HelloWorld 页面，同时把服务器时间传给前端
app.get('/', (req, res) => {
  const serverTime = new Date().toLocaleString('zh-CN', { hour12: false });
  res.send(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .card {
      text-align: center;
      padding: 48px 56px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }
    h1 { font-size: 2.2rem; margin-bottom: 18px; }
    .name { font-size: 1.2rem; opacity: 0.92; margin-bottom: 12px; }
    .time { font-size: 1rem; opacity: 0.8; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！</h1>
    <p class="name">我是 sta-r666，我的第一个 AI 开发的网站</p>
    <p class="time">当前服务器时间：${serverTime}</p>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`HelloWorld 网站已启动：http://localhost:${PORT}`);
});

module.exports = app;
