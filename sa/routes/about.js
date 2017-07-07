var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render('about', {
		title: 'About page',
		partials: {
	  		header: '../views/partials/header',
	  		footer: '../views/partials/footer'
	  	},
	})
})

module.exports = router;