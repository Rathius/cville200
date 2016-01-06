Schedule = new Mongo.Collection('schedule');

// Define the schema
Schedule.attachSchema(new SimpleSchema({
	scheduleTitle: {
		type: String,
		max: 200
	},
	scheduleStartDate: {
		type: Date
	},
	scheduleEndDate: {
		type: Date
	},
	scheduleLoc: {
		type: String
	},
	scheduleInfo: {
		type: String,
		max: 2000
	},
	scheduleLat: {
		type: String
	},
	scheduleLng: {
		type: String
	}
}));