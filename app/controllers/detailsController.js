app.controller('detailsController', function($scope, hotelsData, votingService, $routeParams){

	console.log('hotelId : ' + $routeParams.hotelId);
	//get the hotel id 
	var hotelId = $routeParams.hotelId;
	//$scope.item = hotelsData.selectedHotel;

	$scope.vs = votingService;

	//get the hotel details
	hotelsData.getHotel(hotelId).then(function(hotel){
		//make it available to the view via scope
		$scope.item = hotel;	
	});

	

})