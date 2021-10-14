var createError = require('http-errors');
var express = require('express');
const favicon = require("serve-favicon");
const hbs = require("hbs");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();




// const mapsKey = process.env.MAPSKEY;
// hbs.registerHelper("maps_api_url", function () {
//   let apiUrl = `https://maps.googleapis.com/maps/api/js?key=${mapsKey}`;
//   return apiUrl;
// });

// const fontAwesomeKey = process.env.FONTAWESOMEKEY;
// hbs.registerHelper("font_awesome_api_url", function () {
//   let apiUrl = `https://kit.fontawesome.com/${fontAwesomeKey}.js`;
//   return apiUrl;
// });

let currentYear = new Date().getFullYear();
hbs.registerHelper("current_year", function () {
  return currentYear;
});

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
// registers the location of partials
hbs.registerPartials(__dirname + "/views/partials");

//Routing
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
