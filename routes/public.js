var express = require('express');
var graphCMS = require('../services/graphcms.js');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('frontpage', {});
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