var crypto = require("crypto");

var key = "secret key";
var encrypted = crypto.createHmac("md5", key).update(user.password);
var hashmd5 = crypto.createHash("md5").update(user.password);

import { CryptoJS } from "crypto-js"

var hash = CryptoJS.MD5(user.password);

var md5 = require('md5');

module.exports.foo = function (req, _res) {
	if (req.query.token == md5(req.query.login)) {
    // do something
  }
}