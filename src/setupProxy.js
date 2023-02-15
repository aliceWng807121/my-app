const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/sign/v1/ce/",
    createProxyMiddleware({
      target: "http://24h1.dev.mypchome.com.tw",
      changeOrigin: true,
    })
  );
  app.use(
    "/sign/v1/food/",
    createProxyMiddleware({
      target: "https://24h.pchome.com.tw",
      changeOrigin: true,
    })
  );
};