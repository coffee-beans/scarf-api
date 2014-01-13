//
//  LocationService.js
//  Scarf
//
//  Copyright (c) 2014 coffee.beans. All rights reserved.
//
	
var LocationService = function(lat, long) {
	this.longitude = this.setLongitude(long);
	this.latitude = this.setLatitude(lat);
	this.baseUrl = 'api.wunderground.com';
	this.apiKey = 'ab1bd54f3fb269da';
	this.endPoint = 'conditions';
	this.path = this.setPath();
	
};
LocationService.prototype.setLatitude = function(latitude){
	if(latitude > -90 && latitude < 90){
		return latitude;
	}else {
		throw new Error('invalid latitude');
	}
};

LocationService.prototype.setLongitude = function(longitude){
	if(longitude > -180 && longitude < 180){
                return longitude;
        }else {
                throw new Error('invalid longitude');
        }	
};

LocationService.prototype.getLongitude = function(){
	return this.longitude;
};

LocationService.prototype.getLatitude = function(){
	return this.latitude;
};

LocationService.prototype.getBaseUrl = function(){
	return this.baseUrl;
};

LocationService.prototype.getApiKey = function(){
	return this.apiKey;
};

LocationService.prototype.getPath = function(){
	return this.path;
};

LocationService.prototype.setPath = function(){
	return '/' + ['api', this.apiKey,this.endPoint, 'q'].join('/') +'/'+[this.latitude, this.longitude].join(',')+'.json';
};

LocationService.prototype.httpRequest = function() {
	var http = require('http'),
	    options = {
		host: this.baseUrl,
		path: this.path
	    },
	    callback = function(response) {
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
