/*
 *	Location Service
 */
var LocationService = function(long, lat) {
	this.longitude = long;
	this.latitude = lat;
	this.baseUrl = 'api.wunderground.com';
	this.apiKey = 'ab1bd54f3fb269da';
	this.endPoint = 'conditions';
	this.path = '';
	
};

LocationService.prototype.getLongitude = function(){
	return this,longitude;
};

LocationService.prototype.getLatitude = function(){
	return this.latitude;
};

LocatonService.prototype.getBaseUrl = function(){
	return this.baseUrl;
};

LocationService.prototype.setPath = function(){
	return [this.baseUrl, 'api', this.apiKey, endPoint, 'q', loc].join('/') + 'json';
};

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

module.exports.LocationService = LocationService;
