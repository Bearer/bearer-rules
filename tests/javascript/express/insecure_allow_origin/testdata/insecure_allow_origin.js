var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.get("/insecure", (req, res) => {
  var origin = req.params.origin
// bearer:expected javascript_express_insecure_allow_origin
  res.writeHead(200, { "Access-Control-Allow-Origin": req.params.origin })
// bearer:expected javascript_express_insecure_allow_origin
  res.set("access-control-allow-origin", origin)
})
