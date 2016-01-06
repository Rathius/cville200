Template.schedule.helpers({
  	schedule: function() {
  		return Schedule.find({});
	}
});

var MAP_ZOOM = 15;

Template.schedule_item.helpers({
	schedule: function() {
  		return Schedule.findOne({_id});
	},
	/*geolocationError: function() {
		var error = Geolocation.error();
		return error && error.message;
	},*/
	mapOptions: function() {
		/*var lat = Schedule.findOne({_id: schedule()}).scheduleLat;
		var lng = Schedule.findOne({_id: schedule()}).scheduleLng;*/
		// Initialize the map once we have the latLng
		if (GoogleMaps.loaded()) {
			return {
				center: new google.maps.LatLng("37.258206", "-85.341926"),
				zoom: MAP_ZOOM
			};
		}
	}
});

Template.schedule_item.onCreated(function() {
	GoogleMaps.ready('map', function(map) {
		/*var lat = {{scheduleLat}};
		var lng = {{scheduleLng}};*/
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng("37.258206", "-85.341926"),
			map: map.instance 
		});
	});
});


