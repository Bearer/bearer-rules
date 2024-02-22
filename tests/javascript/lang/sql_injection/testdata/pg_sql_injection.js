const { Client } = require("pg");

const client = new Client({
	// client setup
});

module.exports.fooBar = function (req, _res) {
// bearer:expected javascript_lang_sql_injection
	var user = client.query(
		"SELECT * FROM users WHERE user.name = " + req.params.user.name
	);

	return user;
};
