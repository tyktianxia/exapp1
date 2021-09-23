var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var wxRouter = require("./routes/wx");
var apiRouter = require("./routes/api");
// var sqlRouter = require("./routes/sql");
var qiniuRouter = require("./routes/qiniu");

function handlerRoutes(app) {
  app.use("/", indexRouter);
  app.use("/user", userRouter);
  app.use("/wx", wxRouter);
  // app.use("/sql", sqlRouter);
  app.use("/qiniu", qiniuRouter);
}

module.exports = handlerRoutes;