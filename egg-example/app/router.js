// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/user/list/:id', controller.users.getUserList);
  router.post('/user/list', controller.users.addUser);
  router.put('/user/list:id', controller.users.updatedUser);
  router.del('/user/list:id', controller.users.delUser);
};