/* global require */
/* global __dirname */

// Modules
var http = require('http');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var http = require('http').Server(app);

// Enviroment variables
var port = process.env.PORT || 3000;

//Define view folder, and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Serve static files from this folder - will become /
app.use(serveStatic(__dirname + '/public'));

// Routes
var public = require('./routes/public.js');
app.use('/', public);

//Start server
http.listen(port, function () {
    console.log('Server is now running on ' + port);
});