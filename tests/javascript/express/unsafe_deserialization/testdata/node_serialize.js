var nodeSerialize = require("node-serialize")

module.exports.unsafeDeserialize = function(req, _res){
  var userStr = new Buffer.from(req.cookies.user, "utf8").toString();
// bearer:expected javascript_express_unsafe_deserialization
  nodeSerialize.unserialize(userStr)
}
