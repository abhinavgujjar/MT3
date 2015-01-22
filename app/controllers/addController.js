	app.controller('addController', function($scope, hotelsData) {

		$scope.newHotel = {
			amenities : []
		}

		$scope.images = ["goldenpalms.jpg",
			"clarks-exotica-resort.jpg",
			"the-elanza-hotel.jpg",
			"ramada.jpg",
			"ibis.jpg",
			"oberoi.jpg",
			"trinity-suites.jpg"
		];
		$scope.addAmenity = function(item){
			$scope.newHotel.amenities.push({
				name : item
			});
		}
		$scope.addHotel = function(newHotel) {

			if ($scope.hotelsForm.$invalid) {
				alert('invalid. please try again');
			} else {

				hotelsData.addHotel(newHotel);
			}
		}


	})