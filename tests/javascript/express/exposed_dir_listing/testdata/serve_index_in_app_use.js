var serveIndex = require("serve-index")
var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

// bearer:expected javascript_express_exposed_dir_listing
app.use("/public", serveIndex(__dirname + "files"))

app.listen(3000)
