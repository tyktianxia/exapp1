// config/config.${env}.js
exports.mysql = {
  // 单数据库信息配置
  client: {
    host: "106.15.207.114",
    port: "3306",
    user: "root",
    password: "yanzhi@2416",
    database: "yanzhi",
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

// config.passportGithub = {
//   key: '4f7d41dd2ffef81bdcf1',
//   secret: '8e3353639fdd7921ae8cdce8c8f83665787fc383',
//   callbackURL: '/passport/github/callback',
//   // proxy: false,
// };
exports.passportGithub = {
  key: '4f7d41dd2ffef81bdcf1',
  secret: '8e3353639fdd7921ae8cdce8c8f83665787fc383',
  // callbackURL: '/passport/github/callback',
};
