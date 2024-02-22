var jwt = require("jsonwebtoken");
// bearer:expected javascript_lang_jwt
var token = jwt.sign(
	{ user: { email: "jhon@gmail.com" } },
	process.env.JWT_SECRET
);
