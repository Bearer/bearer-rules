const myCrypto = require("crypto")

var key = "secret key";
myCrypto.createHmac("md5", key).update(user.email);
var hashmd5 = myCrypto.createHash("md5").update(user.email);
