import deserializeError from 'serialize-error';

module.exports.deserializedError = function(req, _res) {
// bearer:expected javascript_express_unsafe_deserialization
  deserializeError({
    name: "MyCustomError",
    message: req.params.error
  })
}