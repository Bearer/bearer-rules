const myMd5 = require("md5")

module.exports.hashPw = function (req, _res) {
// bearer:expected javascript_lang_weak_hash_md5
  hashedPw = myMd5(req.query.email)
// bearer:expected javascript_lang_weak_hash_md5
  hashedPw = myMd5("hello")
}