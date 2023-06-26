import expressjwt from "expressjwt"
var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())
const jwt2 = expressjwt

app = express.app()

app.get(
  "/bad",
  expressjwt({ secret: "my-hardcoded-secret" }),
  function (_req, res) {
    res.sendStatus(200)
  }
)

var secret = "my-hardcoded-secret"

jwt.sign({ x: 42 }, secret, y)

app.get("/bad-2", jwt2({ secret: secret }), function (_req, res) {
  res.sendStatus(200)
})

import { sign as foo, y as bar } from 'jsonwebtoken'
foo({ x: 42 }, secret)

const { sign, y } = require("jsonwebtoken")
sign({ x: 42 }, secret)

import * as expressjwt2 from "expressjwt"
app.get(
  "/bad",
  expressjwt2({ secret: "my-hardcoded-secret" }),
  function (_req, res) {
    res.sendStatus(200)
  }
)
