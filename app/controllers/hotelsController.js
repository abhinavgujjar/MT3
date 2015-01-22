//access a module
app.controller('hotelsController', function($scope, defaultLimit, hotelsData, votingService, $http) {
	$scope.city = 'Bangalore';
	$scope.state = 'Karnataka';

	$scope.showHotels = true;

	$scope.numberOfHotels = defaultLimit;

	var promise = hotelsData.getHotels();

	promise.then(function(hotels){
		$scope.hotels = hotels;
	})


	$scope.vs = votingService;

	$scope.showMore = function(item){
		item.showMore = true;	
	}
		
});