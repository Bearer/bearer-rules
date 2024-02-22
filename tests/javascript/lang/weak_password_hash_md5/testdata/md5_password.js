var crypto = require("crypto");

var key = "secret key";
// bearer:expected javascript_lang_weak_password_hash_md5
var encrypted = crypto.createHmac("md5", key).update(user.password);
// bearer:expected javascript_lang_weak_password_hash_md5
var hashmd5 = crypto.createHash("md5").update(user.password);

import { CryptoJS } from "crypto-js"

// bearer:expected javascript_lang_weak_password_hash_md5
var hash = CryptoJS.MD5(user.password);

var md5 = require('md5');

module.exports.foo = function (req, _res) {
	if (req.query.token == md5(req.query.login)) {
    // do something
  }
}