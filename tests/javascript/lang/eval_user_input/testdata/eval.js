var express = require("express")
var helmet = require("helmet")

var app = express()
app.use(helmet())
app.use(helmet.hidePoweredBy())

app.post("/:id", (req, res) => {
  userInput = req.params.id
  var command = "new Function('" + userInput + "')"
  // bearer:expected javascript_lang_eval_user_input
  return eval(command)
})

const vm = require("node:vm")

exports.handler = async function (event, _context) {
  const context = event["params"]["context"]
  // bearer:expected javascript_lang_eval_user_input
  eval(context)
}
