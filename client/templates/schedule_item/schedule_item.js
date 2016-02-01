var mapZoom = 7;

if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});

	Template.schedule_item.helpers({
		schedule: function() {
	  		return Schedule.findOne({_id: this._id});
		},
		geolocationError: function() {
			var error = Geolocation.error();
			return error && error.message;
		},
		mapOptions: function() {
			// Make sure the maps API has loaded
			if (GoogleMaps.loaded()) {
				return {
					current: Geolocation.latLng(),
					start: Geolocation.position(),
					dest: (Schedule.findOne({_id: this._id}).scheduleLat, Schedule.findOne({_id: this._id}).scheduleLng),
					center: current,
					zoom: mapZoom
				}
			}
		},
		map: new google.maps.Map(('map'), mapOptions)
	});

	Template.schedule_item.onCreated(function() {
		// We can use the `ready` callback to interact with the map API once the map is ready.
	    GoogleMaps.ready('map', function(map) {
			// Add a marker to the map once it's ready
			var directionsDisplay = new google.maps.DirectionsRenderer(
					map.instance
				);

			// Set destination, origin and travel mode.
			var request = {
				destination: dest,
				origin: start,
				travelMode: google.maps.TravelMode.DRIVING
			};

			// Pass the directions request to the directions service.
			var directionsService = new google.maps.DirectionsService();
			directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					// Disply the route on the map.
					directionsDisplay.setDirections(response);
				}
			});
	    });
	});

}
