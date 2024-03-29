const session = require("express-session")
const express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.use(
  session({
// bearer:expected javascript_express_default_cookie_config
    cookie: {},
  })
)

app.use(
  session({
// bearer:expected javascript_express_default_cookie_config
    cookie: {
      domain: "example.com",
      secure: true,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
      path: "/some-path",
    },
  })
)

app.use(
  session({
// bearer:expected javascript_express_default_cookie_config
    cookie: {
      domain: "example.com",
      secure: true,
      httpOnly: false,
      name: "my-custom-cookie-name",
    },
  })
)
