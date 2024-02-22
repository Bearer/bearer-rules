module.exports.foo = function(req, res){
// bearer:expected javascript_express_open_redirect
  res.redirect(req.params.url)
// bearer:expected javascript_express_open_redirect
  res.redirect(req.query.url + "/bar")
// bearer:expected javascript_express_open_redirect
  res.redirect("https://" + req.params.url + "/bar")
// bearer:expected javascript_express_open_redirect
  res.redirect("http://" + req.params.path + "/bar")
}
