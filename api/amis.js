// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "";
  if (req.url.startsWith("/amis")) {
    target = "https://aisuda.bce.baidu.com/amis/";
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/amis/": "/",
    },
  })(req, res);
};
