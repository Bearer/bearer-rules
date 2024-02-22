var jwt = require("jsonwebtoken");

// bearer:expected javascript_lang_jwt_hardcoded_secret
var token = jwt.sign({ foo: "bar" }, "someSecret");
