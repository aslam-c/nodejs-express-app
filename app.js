const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer=require('multer');
require('dotenv').config()

//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//custom helpers
const {makeJsonResponse}= require("./utils/response")


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page

  // res.status(err.status || 500);
  // res.render('error');

  let httpStatusCode=err?.message?.code||422
  const jsonResponse =makeJsonResponse(err?.message?.message,{},{},httpStatusCode,false)
  res.status(httpStatusCode).json(jsonResponse)

});

const port=process.env.APP_PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
