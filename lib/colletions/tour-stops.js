TourStops = new Mongo.Collection('tourStops');

// Define the schema
TourStops.attachSchema(new SimpleSchema({
	tourStopsTitle: {
		type: String,
		max: 200
	},
	tourStopsAddress: {
    	type: String,
    	max: 50
	},
	tourStopsCity: {
    	type: String,
    	max: 50
	},
	tourStopsState: {
    	type: String,
    	max: 2
	},
	tourStopsPostal: {
    	type: String,
    	max: 10
	},
	tourStopsNarrative: {
    	type: String
    },
	scheduleLat: {
		type: String
	},
	scheduleLng: {
		type: String
	}
}));