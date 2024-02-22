var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.get("/bad", (req, res) => {
// bearer:expected javascript_express_external_resource
  return res.render(req.query.path + "/results", { page: 1 })
})
