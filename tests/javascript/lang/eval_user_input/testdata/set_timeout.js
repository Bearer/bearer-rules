var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.post("/:id", (req, res) => {
  userInput = req.params.id
  var command = "new Function('" + userInput + "')"
// bearer:expected javascript_lang_eval_user_input
  setTimeout(command)

  var command2 = "new Function('" + (userInput ? ok : ok) + "')"
  setTimeout(command2)
})
