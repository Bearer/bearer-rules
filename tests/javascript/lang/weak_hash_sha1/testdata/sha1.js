import MyCryptoJS from "crypto-js"
const myCrypto = require("crypto")

var key = "secret key";
// bearer:expected javascript_lang_weak_hash_sha1
var encrypted = myCrypto.createHmac("sha1", key).update(user.email);
// bearer:expected javascript_lang_weak_hash_sha1
var hashmd5 = myCrypto.createHash("sha1").update(user.email);

// bearer:expected javascript_lang_weak_hash_sha1
MyCryptoJS.HmacSHA1(user.email, "Key")
// bearer:expected javascript_lang_weak_hash_sha1
MyCryptoJS.SHA1(user.email)
