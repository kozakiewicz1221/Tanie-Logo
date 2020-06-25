var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
<<<<<<< HEAD
var bodyParser = require("body-parser");
var cors = require("cors");
var indexRouter = require("./routes/index");
const mysql = require("mysql");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
=======

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//cors

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));

>>>>>>> 06ddfb21de1e5f0e35a63ecccf5a23cc04f9b0ca
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
<<<<<<< HEAD
app.set("view engine", "jade");

app.use("/", indexRouter);
=======

app.use("/", indexRouter);
app.use("/users", usersRouter);
>>>>>>> 06ddfb21de1e5f0e35a63ecccf5a23cc04f9b0ca

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
<<<<<<< HEAD

const port = 3400;
app.listen(port, () => console.log(`Server started on port: ${port}!`));
=======
const port = "3400";
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
>>>>>>> 06ddfb21de1e5f0e35a63ecccf5a23cc04f9b0ca
module.exports = app;
