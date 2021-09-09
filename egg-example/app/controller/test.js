const Controller = require("egg").Controller;

class TestsController extends Controller {
  async oauth() {
    console.log(this.ctx.isAuthenticated(), 789978)
    // this.ctx.isAuthenticated()
    // const code = this.ctx.query.code;
    // const url = `https://github.com/login/oauth/access_token`;
    // const data = {
    //   client_id: "4f7d41dd2ffef81bdcf1",
    //   client_secret: "8e3353639fdd7921ae8cdce8c8f83665787fc383",
    //   code: code,
    // };
    // try {
    //   const result = await this.ctx.curl(url, {
    //     method: "POST",
    //     data,
    //   });
    //   this.ctx.body = result;
    // } catch (error) {
      this.ctx.body = 465;
    // }
  }
  async loginCallback() {
    this.ctx.body = "loginCallback";
  }
}

module.exports = TestsController;

// https://github.com/settings/applications/1706019

// https://github.com/login/oauth/authorize?client_id=4f7d41dd2ffef81bdcf1&scope=user,public_repo
