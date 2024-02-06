import { cookieSession } from "cookie-session"

const session = require("express-session")
var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.use(
  // bearer:expected javascript_express_cookie_missing_http_only
  session({
    cookie: {
      domain: "example.com",
      httpOnly: false,
      secure: true,
      name: "my-custom-cookie-name",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/some-path",
    },
  })
)

app.use(
  // bearer:expected javascript_express_cookie_missing_http_only
  cookieSession({
    domain: "example.com",
    httpOnly: false,
    secure: false,
    name: "my-custom-cookie-name",
    maxAge: 24 * 60 * 60 * 1000,
    path: "/some-path",
  })
)

