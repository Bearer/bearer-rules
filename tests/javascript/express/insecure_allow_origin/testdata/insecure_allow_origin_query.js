var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.get("/insecure", (req, res) => {
  var origin = req.query.origin
  res.setHeader("Access-Control-Allow-Origin", origin)
})
