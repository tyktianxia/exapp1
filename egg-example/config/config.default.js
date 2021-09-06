// config/config.default.js
exports.keys = "yanyanayanyanayanaynzhi9098";

// 添加 view 配置
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0",
};

// add middleware robot
exports.middleware = ["robot"];
// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i],
};
