/*
 * API
 */

var express = require('express');
var app = express();

app.get('/location/', function(request, response){
	
	//httpRequest(request.query.lat, request.query.long);
	response.type('text/json');
	response.send('Awesome Coffee Beans');
});

app.listen(process.env.PORT || 4730);
