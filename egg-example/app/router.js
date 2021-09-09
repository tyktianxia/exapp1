// app/router.js
module.exports = app => {
  const { router, controller } = app;
  // 挂载鉴权路由
  app.passport.mount('github');

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);

  router.get('/', controller.home.index);

  router.get('/user/list/:id', controller.users.getUserList);
  router.post('/user/list', controller.users.addUser);
  router.put('/user/list:id', controller.users.updatedUser);
  router.del('/user/list:id', controller.users.delUser);


  router.get('/test/oauth', controller.test.oauth);
};