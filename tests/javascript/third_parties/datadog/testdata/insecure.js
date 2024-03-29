const StatsD = require("hot-shots");

const user = { name: "jhon", email: "jhon@gmail.com" };

const client = new StatsD({
	port: 8020,
	globalTags: { env: process.env.NODE_ENV },
	errorHandler: errorHandler,
});

// bearer:expected javascript_third_parties_datadog
client.event("user", "logged_in", {}, user);
