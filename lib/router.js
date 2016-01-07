Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    // Index page route
    this.route('/',{
        path: '/',
        template: 'home'
    });
    
    // Contact page route
	this.route('contact');
	
	// History page route
	this.route('history');
	
	// Swag page route
	this.route('swag');
	
	// Route to test map
	this.route('map');
	
	// Route to Schedule of Events page
	this.route('schedule',{
    	path: '/schedule',
    	template: 'schedule',
    	data: function(){
        	templateData = {
            	schedule: Schedule.find()
        	};
        	
        	return templateData;
    	}
	});
	
	// Single Event Page with map
	
	this.route('event',{
    	path: '/schedule/:_id',
    	template: 'schedule_item',
		data: function(){
			var currentEvent = this.params._id;
			return Schedule.findOne({_id: currentEvent})
		}
	});
	
	// Routes for the Notable pages
	this.route('/notable/people',{
    	path: '/notable/people',
    	template: 'notable_ppl'
	});
	
	this.route('/notable/places',{
    	path: '/notable/places',
    	template: 'notable_places'
	});
	
	this.route('/notable/businesses',{
    	path: '/notable/businesses',
    	template: 'notable_biz'
	});
	
	// Routes for Tour Pages
	this.route('/tour/downtown',{
    	path: '/tour/downtown',
    	template: 'downtown_tour'
	});
	
	this.route('/tour/driving',{
    	path: '/tour/driving',
    	template: 'driving_tour'
	});
	
	this.route('/tour/virtual',{
    	path: '/tour/virtual',
    	template: 'virtual_tour'
	});
    
    
    
    // Admin Page route
    this.route('admin',{
        path: '/admin',
        template: 'admin_dashboard',
        data: function(){
	        templateData = {
	        	schedule: Schedule.find()
	    	};
	    }
    });
    
    this.route('/admin/add_schedule_item',{
	    path: '/admin/add_schedule_item',
	    template: 'add_schedule_item',
    });
    
    this.route('edit_schedule_item',{
	    path: '/admin/events/edit',
	    template: 'edit_schedule_item',
    	data: function(){
	    	var currentScheduleItem = this.params._id; 
        	templateData = {
            	schedule: Schedule.findOne({currentScheduleItem})
        	};
    	}
    });
        

});