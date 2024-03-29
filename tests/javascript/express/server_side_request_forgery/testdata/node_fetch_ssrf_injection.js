import fetch from "node-fetch"
var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

const app = express()

app.get("/inject", async (req, res) => {
// bearer:expected javascript_express_server_side_request_forgery
  response = await fetch("https://" + req.query.path)
  res.json(response.data)
})
