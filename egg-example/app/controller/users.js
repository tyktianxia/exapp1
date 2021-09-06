// app/controller/news.js
const Controller = require("egg").Controller;

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
};
class UsersController extends Controller {
  async getUserList(){
    const userList = await this.ctx.service.users.getUserList();
    this.ctx.body = userList;
  }
  async addUser(){
    // const userList = await this.ctx.service.news.userList();
    // this.ctx.body = userList;
  }
  async updatedUser(){
    // const userList = await this.ctx.service.news.userList();
    // this.ctx.body = userList;
  }
  async delUser(){
    // const userList = await this.ctx.service.news.userList();
    // this.ctx.body = userList;
  }
}

module.exports = UsersController;
