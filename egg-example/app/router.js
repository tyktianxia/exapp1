// app/router.js
module.exports = (app) => {
  const { router, controller } = app;

  router.get("/", controller.home.index);

  // 挂载鉴权路由
  app.passport.mount("github");

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);

  // 鉴权成功后的回调页面
  // router.get('/authCallback', controller.home.authCallback);

  router.get("/user/list/:id", controller.users.getUserList);
  router.post("/user/list", controller.users.addUser);
  router.put("/user/list:id", controller.users.updatedUser);
  router.del("/user/list:id", controller.users.delUser);

  router.get("/test/oauth", controller.test.oauth);

  const localStrategy = app.passport.authenticate("github", {
    // successRedirect: "/loginCallback",
    // failureRedirect: "/loginCallback",
    successRedirect:"http://localhost:7001"
  });
  router.get("/passport/github", localStrategy);
  router.get("/passport/github/callback", localStrategy);
  router.get("/loginCallback", controller.test.loginCallback);
};
