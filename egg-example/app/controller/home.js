// app/controller/news.js
const Controller = require("egg").Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body = "Hello world";
  }
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await this.ctx.render("news/list.tpl", newsList);
  }
  async userList(){
    const userList = await this.ctx.service.news.userList();
    this.ctx.body = userList;
  }
}

module.exports = NewsController;
