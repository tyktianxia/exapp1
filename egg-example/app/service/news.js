// app/service/news.js
const Service = require("egg").Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    // const { serverUrl, pageSize } = this.config.news;

    // // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(
    //   `${serverUrl}/topstories.json`,
    //   {
    //     data: {
    //       orderBy: '"$key"',
    //       startAt: `"${pageSize * (page - 1)}"`,
    //       endAt: `"${pageSize * page - 1}"`,
    //     },
    //     dataType: "json",
    //   }
    // );

    // // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map((key) => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: "json" });
    //   })
    // );
    // return newsList.map((res) => res.data);
    // return [
    //   {
    //     name: "yanzhi",
    //     age: 23,
    //   },
    //   {
    //     name: "test",
    //     age: 18,
    //   },
    // ];
    return  {
      list: [
        { id: 1, title: "this is news 1", url: "/news/1" },
        { id: 2, title: "this is news 2", url: "/news/2" },
      ],
    };
  }

  async userList(){
    const result = await this.app.mysql.select("user");
    return result;
  }
}

module.exports = NewsService;
