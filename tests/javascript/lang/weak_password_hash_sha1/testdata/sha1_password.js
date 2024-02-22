var crypto = require("crypto");

var key = "secret key";
// bearer:expected javascript_lang_weak_password_hash_sha1
var encrypted = crypto.createHmac("sha1", key).update(user.password);
// bearer:expected javascript_lang_weak_password_hash_sha1
var shaHash = crypto.createHash("sha1").update(user.password);

// bearer:expected javascript_lang_weak_password_hash_sha1
CryptoJS.HmacSHA1(user.password, "Key")
// bearer:expected javascript_lang_weak_password_hash_sha1
CryptoJS.SHA1(user.password)
