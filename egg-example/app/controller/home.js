// app/controller/news.js
const Controller = require("egg").Controller;

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
};
class NewsController extends Controller {
  async index() {
    this.ctx.body = "Hello world";
  }
  async authCallback() {
    this.ctx.body = "Hello world authCallback";
  }
}

module.exports = NewsController;
