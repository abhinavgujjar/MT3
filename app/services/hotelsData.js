app.factory('hotelsData', function() {

	var hotels = [{
			"id": "1",
			"name": "Golden Palms",
			"price": 30000,
			"location": "Golden Palms Avenue, Off Tumkur Road | Hobli, Tumkur Road, Bangalore 562123, India",
			"rating": 6,
			"description": "We had a company meeting there",
			"website": "http://www.clarksexotica.com/",
			"img": "goldenpalms.jpg"
		}, {
			"id": "2",
			"name": "Clarks Exotica",
			"price": 13000,
			"location": "Swiss Town, Hollywood Junction, Sadahalli Post, Devanahalli Road, Bangalore 562 110, India",
			"description": "Very comfortable, clean and classy hotel",
			"website": "http://www.clarksexotica.com/",
			"img": "clarks-exotica-resort.jpg",
			"rating": 6
		}, {
			"id": "3",
			"name": "The Elanza Hotel",
			"price": 7000,
			"location": "88 / 2 Richmond Road, Bangalore 560025, India",
			"description": "Stayed at the Elanza for a night on a business trip. Affordable luxury without much fuss. Rooms have every modern convenience with top notch fittings in the bathroom, fantastic rain shower, electronic keypad based controls for lights etc., very comfortable bed, great lighting etc. The lobby is nice but not gigantic like that of a 5-star hotel but elegantly sufficient. The restaurant is fine for a night's dinner and a decent breakfast - although the food quality was fine it could stand some improvement. Friendly, attentive staff. Good location. Will stay there again.",
			"website": "http://www.clarksexotica.com/",
			"img": "the-elanza-hotel.jpg",
			"rating": 3
		}, {
			"id": "4",
			"name": "Ramada Bangalore",
			"price": 17000,
			"location": "11 Park Road, Bangalore 560051, India",
			"description": "I stayed for two nights in this hotel. The hotel was right at the heart of the city near by commercial street. The room was neat clean especially the bathroom was so hygenic. The complementary breakfast buffet was simply awesome and delicious. Here I wud say that they match a five star hotel. About the cons, the staffs during check in were not bothered about welcoming, with no one to even carry the luggages it was a mere rude welcome I must say. The restaurant food there if u must have it is so expensive so better to dine out. Overall it is a very good stay. Cheers to Ramada people",
			"website": "http://www.clarksexotica.com/",
			"img": "ramada.jpg",
			"rating": 8
		}, {
			"id": "5",
			"name": "Ibis",
			"price": 14500,
			"location": "26/1 Hosur Road | Near The Oxford College Bomanahalli, Bangalore 560068, India",
			"description": "I had a terrible experience of staying at Ibis Hosur road for two nights. Had expected a upmarket hotel as the rates at Ibis was equivalent to those charged by other 3 star hotels. Issued faced : Airconditioning wasn't working in the first night. Had to call reception at 4 am and asked for a single bedsheet as it was hot. Only one common low end iron box along with stand available across all floors. The iron box works only at a particular setting. I had to do a quick iron in the second day morning and had to call the room service to get my shirt ironed. Free WIFI is advertised. But it is only 256kbps connection. Rooms are pretty small and chairs were dirty. Even you need to swipe your room access card to use the life. First time I am facing this. The second day morning, I met the manager and complained about the airconditioning. She agreed to have it looked into. But when I came in the night, nothing was changed. After complaining again, they sent the technician. First he said that nothing is wrong. I called reception again and then he checked the system again and rectified the problem (blockage in the air vents). Ibis at Hosur road is not worth the amount we are paying unless you don't get better deals else where. Won't stay there again. Stayed November 2014, travelled on business",
			"website": "http://www.clarksexotica.com/",
			"img": "ibis.jpg",
			"rating": 1
		}, {
			"id": "6",
			"name": "The Oberoi",
			"price": 24500,
			"location": "37-39,Mahatma Gandhi Road, Bangalore 560001, India",
			"description": "From the moment you walk into the Oberoi Bangalore, you are treated like royalty. The staff takes care of every single need and anticipates your potential needs. The food in the restaurants tastes fabulous and is also very creative. The décor and cleanliness of the hotel is also outstanding. Will definitely be back!",
			"website": "http://www.oberoi.com/",
			"img": "oberoi.jpg",
			"rating": 10
		}, {
			"id": "7",
			"name": "ALOFT",
			"price": 24500,
			"location": "Cessna Tech Park",
			"description": "Convenient",
			"website": "http://www.oberoi.com/",
			"img": "trinity-suites.jpg",
			"rating": 10
		}];

		return {
			getHotels: function() {
				
				return hotels;
			},
			addHotel : function(hotel){
				hotels.push(hotel);
			}
		};
	})