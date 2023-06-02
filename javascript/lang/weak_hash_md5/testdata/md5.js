const myMd5 = require("md5")

module.exports.hashPw = function (req, _res) {
  hashedPw = myMd5(req.query.email)
  hashedPw = myMd5("hello")
}