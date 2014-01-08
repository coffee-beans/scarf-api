// spec for service that returns required data from selected weather api

describe('A locationService', function(){

	it('should have a valid latitude', function(){
		//need validation for the latitude
	});

	it('should have a valid longitude', function(){
		//need validation for the longitude
	});

	it('should throw an error if invalid latitude', function(){
		var service = new LocationService();
		expect(function(){
			service.setLatitude(3123); //invalid latitude
		}).toThrowError("errorName");
	});

	it('should throw an error if invalid longitude', function(){

	});

	it('should have a base url', function(){
		//i.e. api.wunderground.com
	});

	it('should have a request', function(){

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