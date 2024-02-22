const connection = mysql.createConnection({});
const asyncConn = await mysql.createConnection({});

module.exports.asyncFooBar = async function (req, res) {
	await asyncConn.execute(
		"SELECT * FROM `admin_users` WHERE ID = " + req.admin.id
	);
	res.send("ok");
};

module.exports.fooBar = function (req, _res) {
// bearer:expected javascript_lang_sql_injection
	connection.query(
		"SELECT * FROM `user` WHERE name = " + req.params.customer.name
	);

	// pool query
	var pool = mysql.createPool();
// bearer:expected javascript_lang_sql_injection
	pool.query(
		"SELECT * FROM users WHERE name = " + req.params.user_name,
		function () {}
	);
	pool.getConnection(function (_err, conn) {
// bearer:expected javascript_lang_sql_injection
		conn.query("SELECT * FROM users WHERE name = " + req.params.user_name, function () {});
		pool.releaseConnection(conn);
	});

	res.send("ok");
};
