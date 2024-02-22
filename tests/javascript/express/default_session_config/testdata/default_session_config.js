const session = require("express-session")
const express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

// bearer:expected javascript_express_default_session_config
app.use(session({}))
