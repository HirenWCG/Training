var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var exphbs = require("express-handlebars");
var cookieSession = require("cookie-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var mailRouter = require("./routes/mail");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: false,
  })
);
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var sess = {
  secret: "keyboard cat",
  // cookie: { maxAge: 200000 },
};
app.use(session(sess));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/mail", mailRouter);
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
