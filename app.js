var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.type('text/plain');
	response.send('Awesome Coffee Beans');
});

app.listen(process.env.PORT || 4730);
