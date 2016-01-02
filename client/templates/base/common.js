Template.nav.onRendered(function () {
	$(".dropdown-button").dropdown({
      closeOnClick: true // Closes dropdown on <a> clicks, useful for Angular/Meteor
    }
  );
    $(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});

Meteor.startup(function(){
	GoogleMaps.load();
});

 $('.button-collapse').sideNav();