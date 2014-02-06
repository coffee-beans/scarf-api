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
	this.scarf = {
		success: null,
        	data: {
			should_wear_scarf : null,
			average_wind_speed : {
			   mph: null,
			   kph: null
			}
        	}
	};
	
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

LocationService.prototype.getScarf = function(){
	return this.scarf;
};

LocationService.prototype.getShouldWearScarf = function(response){
	var wind_min = response.current_observation.wind_mph,
	    wind_max = response.current_observation.wind_gust_mph;
	return (wind_min + wind_max)/2 > 15 ? true : false;
};

LocationService.prototype.getDisplayLocation = function(response){
	return response.current_observation.display_location.full;
};

LocationService.prototype.getAvgWindMph = function(response){
	var wind_min = response.current_observation.wind_mph,
            wind_max = response.current_observation.wind_gust_mph;	  
	return (wind_min + wind_max)/2;
};

LocationService.prototype.getAvgWindKph = function(response){
	var wind_min = response.current_observation.wind_kph,
            wind_max = response.current_observation.wind_gust_kph;
        return (wind_min + wind_max)/2;
};

module.exports.LocationService = LocationService;
