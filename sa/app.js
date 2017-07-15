var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");


var ambias = require('./routes/ambias');
var ambias_about = require('./routes/ambias_about');
var ambias_contact = require('./routes/ambias_contact');

var index = require('./routes/index');
var users = require('./routes/users');
var menu = require('./routes/menu');
var about = require('./routes/about');
var gallery = require('./routes/gallery');
var contact = require('./routes/contact');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',ambias)
app.use('/about', ambias_about)
app.use('/contact', ambias_contact)

app.use('/sa', index);
app.use('/sa/menu', menu);
app.use('/sa/about',about);
app.use('/sa/gallery',gallery);
app.use('/sa/contact',contact);
app.use('/users', users);

//nodemailer
var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: {
    user: 'ambiasgrouppp@gmail.com', //email is not real; use your own email to test
    pass: 'abc12345!'  //use your own password for email to test
  }
});
app.get('/', function(req,res){
	res.sendfile("./views/partials/footer.hjs");
})

app.get('/send', function(req,res){
	var mailOptions = {
	from: '"Ambias Group" <ambiasgrouppp@gmail.com>', // sender address- email is not real; use your own email to test
    to: req.query.email, // list of receivers
    subject: 'Welcome to Szechwan Absolute!', // Subject line
    text: 'Thank you for subscribing to us!', // plaintext body
	}

	console.log(mailOptions);
	transporter.sendMail(mailOptions,function(error,response){
		if(error){
			console.log(error);
			res.send("Error in sending email. Please make sure email is valid");
		}
		else{
			console.log("Message Sent:" + response.message);
			res.send("Email Sent. Check your email!")
		}
	})
	res.redirect("/sa");
})
//end of nodemailer

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
