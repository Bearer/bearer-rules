const express = require("express")
const h = require("helmet")

const app = express()
app.use(h())

app.disable("x-powered-by")
