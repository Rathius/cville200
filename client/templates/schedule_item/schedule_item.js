

var MAP_ZOOM = 15;

Template.schedule_item.helpers({
	schedule: function() {
  		return Schedule.findOne({_id: this._id});
	},
	/*geolocationError: function() {
		var error = Geolocation.error();
		return error && error.message;
	},*/
	mapOptions: function() {
		/*var id = this._id;*/
		var lat = Schedule.findOne({_id: this._id}).scheduleLat;
		var lng = Schedule.findOne({_id: this._id}).scheduleLng;
		
		// Initialize the map once we have the latLng
		if (GoogleMaps.loaded() && lat && lng) {
			return {
				center: new google.maps.LatLng(lat, lng),
				zoom: MAP_ZOOM
			};
		}
	}
});

Template.schedule_item.onCreated(function() {
	// We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('map', function(map) {
		// Add a marker to the map once it's ready
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
    });
});

<<<<<<< HEAD
/*Template.schedule_item.events({
	'click .get-directions': function(event){
		geolocationError: function(event) {
			var error = Geolocation.error();
			return error && error.message;
		},
		mapOptions: function(event) {
			var currentLocation = Geolocation.latLng();
			var startPosition = Geolocation.position();
			var destination = (Schedule.findOne({_id: this._id}).scheduleLat, Schedule.findOne({_id: this._id}).scheduleLng);
			
			var map = new google.maps.Map('map'),{
				// get currentLocation and set map options
				center: currentLocation,
				scrollwheel: false,
				zoom: 7
			};
			
			var directionsDisplay = new google.maps.DirectionsRenderer({
				map: map
			});
			
			// Set destination, origin and travel mode.
			var request = {
				destination: destination,
				origin: startPosition,
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
		}
	}
});
*/


=======
>>>>>>> parent of 240bd81... small updates
