var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var wxRouter = require("./routes/wx");
var apiRouter = require("./routes/api");

function handlerRoutes(app) {
  app.use("/", indexRouter);
  app.use("/users", usersRouter);
  app.use("/wx", wxRouter);
  app.use("/api", apiRouter);
}

module.exports = handlerRoutes;