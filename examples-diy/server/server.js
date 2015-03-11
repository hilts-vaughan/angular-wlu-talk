// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');


var courseData = {};

fs.readFile('export.json', 'utf8', function (err,data) {

	if(err) {
		console.log(err);
	}

	// Load course data

	// Put a friendly message on the terminal
	console.log("Server running at http://127.0.0.1:3333/");


});



// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

	// CORS
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');


	// Add some code to actually send stuff
  	
});


server.listen(3333);
