/*
 * Weather Service  
 */

var Service = function(loc){
	this.url = 'http://api.wunderground.com/api/';
	this.api_key = 'ab1bd54f3fb269da';
	this.end_point = 'conditions';
	this.service_url = buildUrl(loc); 
};

Service.prototype.buildUrl = function(loc){
 	return this.url + this.api_key + '/' + this.end_point + '/q/' + loc + '.json';
};

Service.prototype.requestWeather = function() {
	var request = makeHttpObject();
	request.open('GET', this.service_url, true);
	request.send(null);
	request.onreadystatechange = function() {
		if(request.readyState === 4){
			if(request.status === 200){
				console.log(request.responseText);
			}
			else{
				console.log(request.status, request.statusText);
			}
		}
	};
};
