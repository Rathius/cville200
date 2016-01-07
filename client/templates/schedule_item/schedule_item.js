

var MAP_ZOOM = 15;

Template.schedule_item.helpers({
	schedule: function() {
  		return Schedule.findOne({_id});
	},
	/*geolocationError: function() {
		var error = Geolocation.error();
		return error && error.message;
	},*/
});

Template.schedule_item.onCreated(function() {
	GoogleMaps.ready('map', function(map) {
		var id = this.id;
		var lat = function(){
					return Schedule.findOne(id).schedulelat;
				};
		var lng = function(){
					return Schedule.findOne(id).schedulelng;
				};
		console.log(lat + ", " + lng)
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng({lat}, {lng}),
			map: map.instance 
		});
	});
});


