var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ambias_contact', { 
  	title: 'Ambias contact page',
  	partials: {
  		header: '../views/partials/ambias_header',
  		footer: '../views/partials/ambias_footer'
  	}
  });
});

module.exports = router;