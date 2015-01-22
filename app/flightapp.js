	//declaring a module
	var app = angular.module('flights', ['popularity', 'ngRoute']);


	app.config(function(votingServiceProvider, $routeProvider){

		$routeProvider.when('/home', {
			templateUrl : 'partials/home.html'
		});

		$routeProvider.when('/list', {
			templateUrl : 'partials/flightlisting.html'
		});

		$routeProvider.otherwise( {
			redirectTo : '/home'
		});

		votingServiceProvider.setInterval(4);

	})

	app.controller('flightsController' ,function($scope, votingService){

		$scope.vs = votingService;
		$scope.flights = [
		{
			name : 'Air India',
			dep : 'Bangalore',
			arr : 'Manila'

		},{
			name : 'Lufthansa',
			dep : 'Mumbai',
			arr : 'Frankfurt'

		},{
			name : 'Air Asia',
			dep : 'Chennai',
			arr : 'Kuala Lumpur'

		}]
	})