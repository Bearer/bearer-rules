var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.get("/bad", (req, _res) => {
  try {
// bearer:expected javascript_lang_import_using_user_input
    require(req.query.user.path)
  } catch (err) {
    // handle error
  }

// bearer:expected javascript_lang_import_using_user_input
  import(req.query.user.path)
})
