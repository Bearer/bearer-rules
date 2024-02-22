const knex = require("knex")({
	client: "mysql",
});

module.exports.badQuery = function (req, res) {
// bearer:expected javascript_lang_sql_injection
	var cartDetails = knex
		.select("user.cart_details")
		.from("users")
		.whereRaw("name = " + req.query.user.name);

	res.send(prepareJson(cartDetails));
};

exports.handler = async function (event, _context) {
// bearer:expected javascript_lang_sql_injection
	var cartDetails = knex.select('user.cart_details')
		.from('users')
		.whereRaw('name = ' + event.user.name)

	return cartDetails
}
