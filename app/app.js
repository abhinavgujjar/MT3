	//declaring a module
	var app = angular.module('myApp', ['popularity', 'ngRoute']);

	app.filter('toMetres', function(){
		return function(input){
			return input * 0.092; 
		}
	})

	//var defaultLimit = 5;
	app.value('defaultLimit', 5);

	app.config(function(votingServiceProvider, $routeProvider){

		$routeProvider.when('/home', {
			templateUrl : 'partials/home.html'
		});

		$routeProvider.when('/list', {
			templateUrl : 'partials/listing.html'
		});

		$routeProvider.when('/new', {
			templateUrl : 'partials/new.html',
			controller : 'addController'
		});

		$routeProvider.otherwise( {
			redirectTo : '/home'
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