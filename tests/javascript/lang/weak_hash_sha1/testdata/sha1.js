import MyCryptoJS from "crypto-js"
const myCrypto = require("crypto")

var key = "secret key";
var encrypted = myCrypto.createHmac("sha1", key).update(user.email);
var hashmd5 = myCrypto.createHash("sha1").update(user.email);

MyCryptoJS.HmacSHA1(user.email, "Key")
MyCryptoJS.SHA1(user.email)
