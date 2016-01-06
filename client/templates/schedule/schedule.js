Template.schedule.onRendered(function() {
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.schedule.helpers({
  	schedule: function() {
  		return Schedule.find({});
	}
});

Template.schedule.events({
	'click .go-map': function(event){
		var id = event.target.this._id;
		return Schedule.findOne(id); 
	}
});