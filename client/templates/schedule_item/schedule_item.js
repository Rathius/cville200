

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

