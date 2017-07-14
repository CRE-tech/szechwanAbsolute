var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nk@ambias.com',
    pass: 'yourpassword'
  }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Ambias Group" <nk@ambias.com>', // sender address
    to: email, // list of receivers
    subject: 'Thank you for subscribing to us ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});