angular.module('popularity', [])

angular.module('popularity')
	.provider('votingService', function() {
		var interval = 1;

		this.setInterval = function(value){
			interval = value;
		}

		this.$get = function() {
			return {
				upVote: function(hotel) {
					hotel.rating = hotel.rating || 0;

					hotel.rating = hotel.rating + interval;
				},
				downVote: function(hotel) {

					hotel.rating = hotel.rating || 0;

					if (hotel.rating > 0) {
						hotel.rating = hotel.rating - interval;
					}
				}
			}
		}

	})