app.controller('greetingController', function($scope, greeting) {
	
		var timeOfDay = greeting.getTimeOfDay();

		$scope.greeting = 'Good ' + timeOfDay;

		$scope.company = {
			name: 'Mindtree',
			location: 'global village'
		}


	});