var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ambias_partnership', { 
  	title: 'Ambias partner page',
  	partials: {
  		header: '../views/partials/ambias_header',
  		footer: '../views/partials/ambias_footer',
  		logo: '../views/partials/ambias-logo'
  	}
  });
});
router.get('/baozoudelivery', (req, res, next) => {
	res.render('baozou')
})

module.exports = router;