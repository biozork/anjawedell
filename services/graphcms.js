var express = require('express');
var request = require('request');

var graphAPI = process.env.GRAPHCMS_API;
var graphToken = process.env.GRAPHCMS_TOKEN;

var toolbox = {
	querySlug: function (slug, callback) {
		var query = `{
      PortfolioEntry(slug: "${slug}") {
        projectname
        description
		clients
        categories {
          name
        }
        images {
          url
        }
      }}
    `;
		var values = {};
		requestGraphCMS(query, values, callback);
	}
}

function requestGraphCMS(query, values, callback) {
	request({
		url: graphAPI,
		type: "JSON",
		method: "POST",
		headers: {
			"Authorization": "Bearer " + graphToken,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: query,
			values: values
		})
	}, function (err, res, body) {
		callback(body);
	});
}


module.exports = toolbox;