import { Sequelize } from "sequelize";

module.exports.fooBar = function (req, _res) {
	var sqlite = new Sequelize("sqlite::memory:");
	var customerQuery =
		"SELECT * FROM customers WHERE status = " + req.params.customer.status;
// bearer:expected javascript_lang_sql_injection
	sqlite.query(customerQuery);
};

module.exports.bad = function (status) {
	var sqlite = new Sequelize("sqlite::memory:");
	var customerQuery =
		"SELECT * FROM customers WHERE status = " + status;
	// bearer:expected javascript_lang_sql_injection
	sqlite.query(customerQuery);
};
