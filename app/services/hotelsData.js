angular.module('myApp').factory('hotelsData', function($http, $q) {

	var hotels = [];
	var selectedId;

	return {
		getSelectedHotelId: function() {
			return selectedId;
		},
		setSelectedHotelId: function(id) {
			selectedId = id;
		},
		getHotel: function(id) {
			var deferred = $q.defer();
			$http.get('https://api.parse.com/1/classes/Inns/' + id, {
					headers: {
						'X-Parse-Application-Id': 'P0v0ANOeONAJfdXLOjCKPvurzx4XyqOfsUNwTmkh',
						'X-Parse-REST-API-Key': 'DB5gL7EKFWLXnoxGsFvzgmlua19aflpMzDxsd9nh',
					}
				})
				.success(function(data) {
					deferred.resolve(data);
				});

			return deferred.promise;
		},
		getHotels: function() {

			var deferred = $q.defer();
			$http.get('https://api.parse.com/1/classes/Inns', {
					headers: {
						'X-Parse-Application-Id': 'P0v0ANOeONAJfdXLOjCKPvurzx4XyqOfsUNwTmkh',
						'X-Parse-REST-API-Key': 'DB5gL7EKFWLXnoxGsFvzgmlua19aflpMzDxsd9nh',
					}
				})
				.success(function(data) {
					deferred.resolve(data.results);
				});

			return deferred.promise;
		},
		addHotel: function(hotel) {

			//application id - P0v0ANOeONAJfdXLOjCKPvurzx4XyqOfsUNwTmkh
			//REST API key - DB5gL7EKFWLXnoxGsFvzgmlua19aflpMzDxsd9nh

			$http.post('https://api.parse.com/1/classes/Inns', hotel, {
				headers: {
					'X-Parse-Application-Id': 'P0v0ANOeONAJfdXLOjCKPvurzx4XyqOfsUNwTmkh',
					'X-Parse-REST-API-Key': 'DB5gL7EKFWLXnoxGsFvzgmlua19aflpMzDxsd9nh',
				}
			});
		}
	};
})