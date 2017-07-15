var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ambias_partnership', { 
  	title: 'Ambias partner page',
  	partials: {
  		header: '../views/partials/ambias_header',
  		footer: '../views/partials/ambias_footer'
  	}
  });
});

module.exports = router;