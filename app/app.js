	//declaring a module
	var app = angular.module('myApp', []);

	//access a module
	app.controller('mainController', function($scope) {
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
		$scope.greeting = 'Good ' + timeOfDay;

		$scope.company = {
			name: 'Mindtree',
			location: 'global village'
		}

		$scope.name = 'World';

		$scope.city = 'Bangalore';
		$scope.state = 'Karnataka';

		$scope.numberOfHotels = '3';

		$scope.hotels = [{
			name: 'Leela Palace',
			price: 30000,
			img: 'Itxjyso.jpg'
		}, {
			name: 'Taj Vivanta',
			price: 15000,
			img: 'oJG4EEl.jpg'
		}, {
			name: 'Le Meridian',
			price: 18000,
			img: '9DiuKqi.jpg'
		}];

		$scope.clicker = function(){
			alert('i was clicked');
		}


	})