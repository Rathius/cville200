

Template.list_schedule.helpers({
  	schedule: function() {
  		return Schedule.find({});
	}
});



Template.add_schedule_item.events({
	'submit .add_schedule_item_form': function(event){
		var title = event.target.scheduleTitle.value;
		var startDate = event.target.scheduleStartDate.value;
		var endDate = event.target.scheduleEndDate.value;
		var loc = event.target.scheduleLoc.value;
		var info = event.target.scheduleInfo.value;
		var lat = event.target.scheduleLat.value;
		var lng = event.target.scheduleLng.value;
		
		// Insert Event
		Schedule.insert({
			scheduleTitle: title,
			scheduleStartDate: startDate,
			scheduleEndDate: endDate,
			scheduleLoc: loc,
			scheduleInfo: info,
			scheduleLat: lat,
			scheduleLng: lng
		});
		
		toastr.success("Event Added");
		Router.go('/admin');
		
		// Prevent Submit
		return false;
	}
});

Template.list_schedule.rendered=function() {
	$('.modal-trigger').leanModal();
};

Template.list_schedule.events({
	'click .edit-event': function(event){
		$('#modal1').openModal();
	},
    'submit .edit_event_form': function(event){
		var title = event.target.scheduleTitle.value;
		var startDate = event.target.scheduleStartDate.value;
		var endDate = event.target.scheduleEndDate.value;
		var loc = event.target.scheduleLoc.value;
		var info = event.target.scheduleInfo.value;
		var lat = event.target.scheduleLat.value;
		var lng = event.target.scheduleLng.value;
        
        
        Events.update({
            _id: this._id
        },{
            $set:{
				scheduleTitle: title,
				scheduleStartDate: startDate,
				scheduleEndDate: endDate,
				scheduleLoc: loc,
				scheduleInfo: info,
				scheduleLat: lat,
				scheduleLng: lng
            }
        });
        
        toastr.success("Event Updated");
	    Router.go('/admin');
	    
	    // Prevent Submit
	    return false;
	}, 
});

/*Template.event_list.helpers({
    'click .delete_event': function(event){
        if(confirm("Are you sure?")){
            Events.remove(this._id);
            toastr.success("Event Deleted");
            
            // Prevent submit
            return false;
        };
    }
});
*/