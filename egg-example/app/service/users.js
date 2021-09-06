// app/service/news.js
const Service = require("egg").Service;

class UsersService extends Service {

  async getUserList(){
    const result = await this.app.mysql.select("user");
    return result;
  }
  async addUser(){
    // const result = await this.app.mysql.select("user");
    return result;
  }
  async updatedUser(){
    // const result = await this.app.mysql.select("user");
    return result;
  }
  async delUser(){
    // const result = await this.app.mysql.select("user");
    return result;
  }
}

module.exports = UsersService;
