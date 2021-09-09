// app.js
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    console.log("passport")
    // check user
    assert(user.provider, 'user.provider should exists');
    assert(user.id, 'user.id should exists');

    // find user from database
    //
    // Authorization Table
    // column   | desc
    // ---      | --
    // provider | provider name, like github, twitter, facebook, weibo and so on
    // uid      | provider unique id
    // user_id  | current application user id
    const auth = await ctx.model.Authorization.findOne({
      uid: user.id,
      provider: user.provider,
    });
    const existsUser = await ctx.model.User.findOne({ id: auth.user_id });
    if (existsUser) {
      return existsUser;
    }
    // call user service to register a new user
    const newUser = await ctx.service.user.register(user);
    return newUser;
  });
};
