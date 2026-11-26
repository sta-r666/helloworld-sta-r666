# 练习一：HelloWorld 网站（Node.js，无数据库）

## 项目结构

```
helloworld/
├── server.js      # Node.js + Express 服务器，返回 HelloWorld 页面
├── package.json   # 依赖清单
└── vercel.json    # Vercel 部署配置
```

## 本地运行

```bash
npm install
npm start
```

浏览器访问 http://localhost:3000 ，页面显示：
- “Hello World！我是【你的名字】，我的第一个 AI 开发的网站”
- 当前服务器时间

> 提示：把 `server.js` 中【你的名字】替换成自己的名字。

## 推送 GitHub

1. 在 GitHub 网页新建仓库 `helloworld-你的名字`，选 Public，不勾选 README。
2. 在项目目录终端执行：

```bash
git init
git add .
git commit -m "HelloWorld 网站"
git remote add origin https://github.com/你的用户名/helloworld-你的名字.git
git branch -M main
git push -u origin main
```

## Vercel 部署

1. 打开 https://vercel.com ，用 GitHub 账号登录。
2. Add New → Project → Import 该仓库。
3. Framework 选 Other，保持默认配置 → Deploy。
4. 部署完成后得到 `xxx.vercel.app` 网址，公网可访问。
