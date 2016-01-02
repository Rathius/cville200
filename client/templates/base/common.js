Template.nav.onRendered(function () {
	$(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
});

Meteor.startup(function(){
	GoogleMaps.load();
});