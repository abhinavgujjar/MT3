	var defaultLimit = 6;
	app.controller('addController', function($scope, hotelsData){
		$scope.addHotel = function(name, price) {
			hotelsData.addHotel({
				name : name,
				price : price
			});
		}


	})