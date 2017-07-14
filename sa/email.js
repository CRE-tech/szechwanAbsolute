var nodemailer = require('nodemailer');
var express = require("express");
var app = express();

// create reusable transporter object using the default SMTP transport

let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: {
    user: 'nk@ambias.com',
    pass: 'yourpassword'
  }
});

// setup e-mail data with unicode symbols
let mailOptions = {
    from: '"Ambias Group" <nk@ambias.com>', // sender address
   // to: clientemail, // list of receivers
    subject: 'Welcome', // Subject line
    text: 'Thank you for subscribing to us', // plaintext body
};

// send mail with defined transport object

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});