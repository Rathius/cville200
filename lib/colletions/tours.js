Tours = new Mongo.Collection('tours');

// Define the schema
Tours.attachSchema(new SimpleSchema({
	tourName: {
		type: String
	},
	tourStopNum: {
		type: Number
	},
	tourStopName: {
		type: String,
		max: 200
	},
	tourStopLat: {
		type: String
	},
	tourStopLng: {
		type: String
	}
}));