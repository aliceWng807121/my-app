const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/sign/v1/ce/",
    createProxyMiddleware({
      target: "http://24h1.dev.mypchome.com.tw",
      changeOrigin: true,
    })
  );
};