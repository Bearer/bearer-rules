const { sequelize, User, Password } = require("./init_db");

module.exports.fooBar = function (req, _res) {
  var customerQuery =
    "SELECT * FROM customers WHERE status = " + req.params.customer.status;
  // bearer:expected javascript_lang_sql_injection
  sequelize.query(customerQuery);
};

module.exports.bad = function (status) {
  var customerQuery = "SELECT * FROM customers WHERE status = " + status;
  // bearer:expected javascript_lang_sql_injection
  sequelize.query(customerQuery);
};
