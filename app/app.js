	//declaring a module
	var app = angular.module('myApp', []);


	//var defaultLimit = 5;
	app.value('defaultLimit', 5);

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