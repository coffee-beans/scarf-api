//
//  LocationServiceSpec.js
//  Scarf
//
//  Spec for a location service that returns required data
//  from selected weather api
//
//  Copyright (c) 2014 coffee.beans. All rights reserved.
//

var module = require('../locationService');
    //fixture = require('./wu-ny-location-data.json');

describe('A locationService', function(){

	it('should have a valid latitude', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    latitude = service.getLatitude();
		expect(latitude).toBe(40.685517);
	});

	it('should have a valid longitude', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    longitude = service.getLongitude();
		expect(longitude).toBe(-73.947554);
	});

	it('should throw an error if invalid latitude', function(){
		var testFn = function(){
			new module.LocationService(94.685517, -73.947554);
	    	};
		expect(testFn).toThrow(new Error('invalid latitude'));
	});

	it('should throw an error if invalid longitude', function(){
		var testFn = function(){
			new module.LocationService(40.685517, -183.94755);
		};
		expect(testFn).toThrow(new Error('invalid longitude'));
	});

	it('should have a base url', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    baseUrl = service.getBaseUrl();
		expect(baseUrl).toBeDefined();
	});
	
	it('should have an api key', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    apiKey = service.getApiKey();
		expect(apiKey).toBeDefined();
	});
	
	it('should have a path url', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    pathUrl = service.getPath();
		expect(pathUrl).toBeDefined();
	});
	
	it('should have a valid path url', function(){
		var service = new module.LocationService(40.685517, -73.947554),
		    pathUrl = service.getPath();
		expect(pathUrl).toBe('/api/ab1bd54f3fb269da/conditions/q/40.685517,-73.947554.json');
	});		

	describe('makes a request to an api', function(){

		it('should handle a valid response', function(){
			//in other words if weather.json gets passed back successfully, you should be able to print that out 
		});

		describe('and receives a valid response', function(){

			it('should properly format the weather json as scarf json', function(){
				//so when the weather.json comes back, test that your service parses it to the format that you specified in that ticket
			});

		});

		it('should throw an error if there is an invalid response', function(){

		});

	});
});
