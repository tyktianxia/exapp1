var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var wxRouter = require("./routes/wx");
var apiRouter = require("./routes/api");
// var sqlRouter = require("./routes/sql");

function handlerRoutes(app) {
  app.use("/", indexRouter);
  app.use("/user", userRouter);
  app.use("/wx", wxRouter);
  // app.use("/sql", sqlRouter);
}

module.exports = handlerRoutes;