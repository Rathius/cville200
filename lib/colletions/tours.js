Tours = new Mongo.Collection('tours');

// Define the schema
Tours.attachSchema(new SimpleSchema({
	toursTitle: {
		type: String,
		max: 200
	},
	toursAddress: {
    	type: String,
    	max: 50
	},
	toursCity: {
    	type: String,
    	max: 50
	},
	toursState: {
    	type: String,
    	max: 2
	},
	toursPostal: {
    	type: String,
    	max: 10
	},
	toursNarrative: {
    	type: String
    },
	tourLat: {
		type: String
	},
	tourLng: {
		type: String
	}
}));