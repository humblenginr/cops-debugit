require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Route imports

var indexRouter = require('./routes/index');


var app = express();
var mongoose = require('mongoose');

//Connecting to DATABASE
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex: true
})
.then(() => console.log("DB connection succesful!"))
.catch(err => console.log(err))


//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes 
app.use('/', indexRouter);



module.exports = app;
