//access a module
app.controller('hotelsController', function($scope, defaultLimit, hotelsData, votingService, $http) {
	$scope.city = 'Bangalore';
	$scope.state = 'Karnataka';

	$scope.showHotels = true;

	$scope.numberOfHotels = defaultLimit;

	hotelsData.getHotels(function(hotels){
		$scope.hotels = hotels;
	});


	$scope.vs = votingService;

	$scope.showMore = function(item){
		item.showMore = true;	
	}
		
});