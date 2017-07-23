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
var ambias_partners = require('./routes/ambias_partners');

var index = require('./routes/index');
var users = require('./routes/users');
var menu = require('./routes/menu');
var about = require('./routes/about');
var gallery = require('./routes/gallery');
var contact = require('./routes/contact');
var preload = require('./routes/preload');




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
app.use('/partners', ambias_partners)

app.use('/sa', index);
app.use('/sa/menu', menu);
app.use('/sa/about',about);
app.use('/sa/gallery',gallery);
app.use('/sa/contact',contact);
app.use('/users', users);
app.use('/preload',preload);

//nodemailer
var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: {
    user: 'ambiasnotification@gmail.com', //email is not real; use your own email to test
    pass: 'abc12345!'  //use your own password for email to test
  }
});
app.get('/', function(req,res){
	res.sendfile("./views/partials/footer.hjs");
})

app.post('/send', function(req,res){
	var mailOptions = {
	from: '"Ambias Group" <ambiasnotification@gmail.com>', // sender address- email is not real; use your own email to test
  to: req.body.email, // list of receivers
  subject: 'Welcome to Szechwan Absolute!', // Subject line
  text: 'Thank you for subscribing to us!', // plaintext body
	}
  var mailNotification = {
  from: '"Ambias Group" <ambiasnotification@gmail.com>', // sender address- email is not real; use your own email to test
  to: 'brainychew@gmail.com', // list of receivers
  subject: req.body.email + ' has subscribed!', // Subject line
  text: req.body.email + ' has subscribed to your newsletter!', // plaintext body
  }

	console.log(mailOptions);
	transporter.sendMail(mailOptions,function(error,response){
		if(error){
      res.end("Email could not be sent. Check if email is accurate");
		}
		else{
			res.end("Email Sent. Check your email!");
        transporter.sendMail(mailNotification,function(error,response){
          if(error){
            res.end("You did not get a notification");
          }
          else{
            res.end("You got a notification!");
          }
        })
		}
	})
	res.redirect("/sa");
})

app.get('/', function(req,res){
  res.sendfile("./views/partials/footer.hjs");
})

app.post('/post', function(req,res){
  var mailOptions = {
  from: '<ambiasnotification@gmail.com>', // sender address- email is not real; use your own email to test
  to: 'brainychew@gmail.com', // list of receivers
  subject: 'You have received feedback', // Subject line
  text: "My name is: " + req.body.name + "\n\n\n" + req.body.message + "\n\n\n" + "From: " + req.body.email, // plaintext body
  }

  console.log(mailOptions);
  transporter.sendMail(mailOptions,function(error,response){
    if(error){
      res.end("Message could not be sent.");
    }
    else{
      res.end("Message Sent. Thanks!");
    }
  })
  res.redirect("/");
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
