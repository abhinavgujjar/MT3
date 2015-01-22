angular.module('myApp').factory('hotelsData', function($http, $q) {

	var hotels = [];


	return {
		getHotels: function() {

			var deferred = $q.defer();
			$http.get('data/hotels')
				.success(function(data) {
					deferred.resolve(data);
				});

			return deferred.promise;
		},
		addHotel: function(hotel) {
			hotels.push(hotel);
		}
	};
})