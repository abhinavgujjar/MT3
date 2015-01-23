//access a module
app.controller('hotelsController', function($scope, defaultLimit, hotelsData, votingService, $location) {
	$scope.city = 'Bangalore';
	$scope.state = 'Karnataka';

	$scope.showHotels = true;

	$scope.numberOfHotels = defaultLimit;

	var promise = hotelsData.getHotels();

	promise.then(function(hotels){
		$scope.hotels = hotels;
	})

	$scope.selectHotel = function(hotel){

		hotelsData.selectedHotel = hotel;
//		hotelsData.setSelectedHotelId(id);

		$location.url('/details');
	}


	$scope.vs = votingService;

	$scope.showMore = function(item){
		item.showMore = true;	
	}
		
});