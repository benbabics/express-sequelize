var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiUsersRouter = require('./routes/api/users');
var apiTutorialsRouter = require('./routes/api/tutorials');
var apiCommentsRouter = require('./routes/api/comments');

var app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/users', apiUsersRouter);
app.use('/api/tutorials', apiTutorialsRouter);
apiTutorialsRouter.use('/:tutorialId/comments', apiCommentsRouter);

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

// models
const db = require('./models');
db.sequelize.sync();

module.exports = app;
