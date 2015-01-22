//access a module
app.controller('hotelsController', function($scope, defaultLimit, hotelsData, votingService) {
	$scope.city = 'Bangalore';
	$scope.state = 'Karnataka';

	$scope.showHotels = true;

	$scope.numberOfHotels = defaultLimit;

	$scope.hotels = hotelsData.getHotels();

	$scope.vs = votingService;

	$scope.showMore = function(item){
		item.showMore = true;	
	}
		
});