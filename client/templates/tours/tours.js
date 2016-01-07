

var MAP_ZOOM = 15;

Template.driving_tour.helpers({
	driving: function() {
  		return Driving.find();
	},
	geolocationError: function() {
		var error = Geolocation.error();
		return error && error.message;
	},
	mapOptions: function() {
		/*var id = this._id;*/
		var lat = Driving.findOne({_id: this._id}).tourStopLat;
		var lng = Driving.findOne({_id: this._id}).tourStopLng;
		
		// Initialize the map once we have the latLng
		if (GoogleMaps.loaded() && lat && lng) {
			return {
				center: new google.maps.LatLng(lat, lng),
				zoom: MAP_ZOOM
			};
		}
	}
});

Template.driving_tour.onCreated(function() {
	// We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('map', function(map) {
		// Add a marker to the map once it's ready
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
    });
});

