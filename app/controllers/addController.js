	app.controller('addController', function($scope, hotelsData) {


		var images = ["goldenpalms.jpg"
			"clarks-exotica-resort.jpg",
			"the-elanza-hotel.jpg",
			"ramada.jpg",
			"ibis.jpg",
			"oberoi.jpg",
			"trinity-suites.jpg"
		];

		$scope.addHotel = function(newHotel) {

			if ($scope.hotelsForm.$invalid) {
				alert('invalid. please try again');
			} else {

				hotelsData.addHotel(newHotel);
			}
		}


	})