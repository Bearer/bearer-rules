const myCrypto = require("crypto")

var key = "secret key";
// bearer:expected javascript_lang_weak_hash_md5
myCrypto.createHmac("md5", key).update(user.email);
// bearer:expected javascript_lang_weak_hash_md5
var hashmd5 = myCrypto.createHash("md5").update(user.email);
