/*
 * API
 */
var httpRequest = function(loc) {
	var end_point = 'conditions',
	    api_key = 'ab1bd54f3fb269da',
	    path = '/api/' + api_key + '/' + end_point + '/q/' + loc + '.json';

	var http = require('http');

	var options = {
		host: 'api.wunderground.com',
		path: path
	};
	
	var callback = function(response) {
		var str = '';
		response.on('data', function(chunk){
			str += chunk;
		});
		response.on('end', function(){
			console.log(str);
		});
	};
	
	http.request(options, callback).end();

};

var express = require('express');
var app = express();

app.get('/:loc', function(request, response){
	
	httpRequest(request.params.loc);
	response.type('text/json');
	response.send('Awesome Coffee Beans');
});

app.listen(process.env.PORT || 4730);
