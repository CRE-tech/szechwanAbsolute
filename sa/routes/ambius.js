var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ambius_main', { 
  	title: 'Ambius corporation page',
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer'
  	}
  });
});

module.exports = router;