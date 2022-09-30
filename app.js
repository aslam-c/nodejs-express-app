const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
require('dotenv').config()

//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');



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
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page

  if (err instanceof multer.MulterError) {
    console.log("MULTER ERROR " + JSON.stringify(err))
  }

  // res.status(err.status || 500);
  // res.render('error');
  res.status(403).json({ message: err.message })


});

console.log([process.env.APP_PORT]);
const port = process.env.APP_PORT || 3001;

let mongoDbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS
  },
}, (err) => {
  if (err) console.log("mongoose error: ", err)
  console.log(["DB connected"])
  app.listen({
    port: process.env.PORT,
    host: process.env.HOST
  }, (res) => {
    console.log(["Secure server started at: ", port]);
  })
});



app.listen(port, () => {
  console.log(['ffff==>', port])
  console.log(`Listening on port ${port}`)
})

module.exports = app;
