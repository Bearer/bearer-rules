import puppeteer from "puppeteer"

var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.get("/inject", async (req, res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  var content = req.body.content
// bearer:expected javascript_express_server_side_request_forgery
  await page.setContent(content)
// bearer:expected javascript_express_server_side_request_forgery
  await page.goto("https://" + req.query.path)

  res.send("success")
})
