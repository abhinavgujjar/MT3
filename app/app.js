	//declaring a module
	var app = angular.module('myApp', ['popularity', 'ngRoute']);

	app.filter('toMetres', function() {
		return function(input) {
			return input * 0.092;
		}
	})

	app.filter('cityOrCountry', function() {
		return function(input, searchTerm) {

			if ( !searchTerm ){
				return input;
			}
			var matching = [];

			for (var i = 0; i < input.length; i++){
				if  (( input[i].name.indexOf(searchTerm) > 0 ) || 
					( input[i].location.indexOf(searchTerm) > 0 ))
				{
					matching.push(input[i]);
				}
			}
			return matching;
		}
	})

	//var defaultLimit = 5;
	app.value('defaultLimit', 5);

	app.directive('carousel', function() {

		return {
			restrict: 'E',
			templateUrl: 'partials/carousel.html',
			scope: {
				images : '=',
				selectedImage : '='
			},
			controller: function($scope) {
				$scope.index = 0
				$scope.selectedImage = $scope.images[$scope.index];

				$scope.next = function() {
					$scope.index++;

					if ($scope.index > $scope.images.length) {
						$scope.index = 0;
					}

					$scope.selectedImage = $scope.images[$scope.index];
				}

				$scope.prev = function() {
					$scope.index--;

					if ($scope.index < 0) {
						$scope.index = $scope.images.length;
					}

					$scope.selectedImage = $scope.images[$scope.index];
				}


			}
		}

	})

	app.config(function(votingServiceProvider, $routeProvider) {

		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html'
		});

		$routeProvider.when('/list', {
			templateUrl: 'partials/listing.html'
		});

		$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'addController'
		});

		$routeProvider.when('/details', {
			templateUrl: 'partials/details.html',
			controller: 'detailsController'
		});

		$routeProvider.otherwise({
			redirectTo: '/home'
		});

		votingServiceProvider.setInterval(14);

	})

	app.factory('greeting', function() {

		return {
			getTimeOfDay: function() {
				var timeOfDay = 'Morning';
				var currentHours = (new Date()).getHours();
				if (currentHours >= 11) {
					timeOfDay = 'Afternoon'
				}

				if (currentHours > 16) {
					timeOfDay = 'Evening';
				}

				if (currentHours > 20) {
					timeOfDay = 'Night';
				}
				return timeOfDay;
			}
		};
	})