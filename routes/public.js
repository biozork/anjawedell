var express = require('express');
var graphCMS = require('../services/graphcms.js');
var router = express.Router();

router.get('/', function (req, res) {
	graphCMS.listPortfolioEntries(function(response){
		var response = JSON.parse(response);
		res.render('frontpage', {data: response.data});
	})
	
});

router.get('/about', function(req, res){
	res.render('about', {});
});

router.get('/contact', function(req, res){
	res.render('contact', {});
});

router.get('/portfolio/:slug', function (req, res) {
	//graphCMS.init(req.params.slug);
	//console.log(req.params.slug);
	graphCMS.querySlug(req.params.slug, function (response) {
		var response = JSON.parse(response);
		if(response.data.PortfolioEntry == null){
			res.status(404).end('404 not found');	
		} else {
			res.render('portfolio', {data:response.data});
		}
	})
});


module.exports = router;