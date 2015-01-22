angular.module('myApp').factory('hotelsData', function($http) {

	var hotels = [];


	return {
		getHotels: function(callback) {
			$http.get('data/hotels')
			.success(function(data){
				callback(data);				
			})

			
		},
		addHotel: function(hotel) {
			hotels.push(hotel);
		}
	};
})