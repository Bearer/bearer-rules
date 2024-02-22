// bearer:expected javascript_lang_raw_html_using_user_input
`<h1 class="test">${req.params.oops}</h1>`
// bearer:expected javascript_lang_raw_html_using_user_input
`<h1>${req.params.oops}</h1>`

// bearer:expected javascript_lang_raw_html_using_user_input
doT.compile(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
ejs.compile(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
Handlebars.compile(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
Hogan.parse(Hogan.scan(req.params.oops), null)

// bearer:expected javascript_lang_raw_html_using_user_input
$.templates(req.params.oops)

// bearer:expected javascript_lang_raw_html_using_user_input
template(req.params.oops, {})
// bearer:expected javascript_lang_raw_html_using_user_input
_.template(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
compiler.compileSync(req.params.oops, "test.js")

// bearer:expected javascript_lang_raw_html_using_user_input
Mustache.render(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
nunjucks.renderString(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
pug.render(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
Sqrl.render(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
Template7.compile(req.params.oops, {})

// bearer:expected javascript_lang_raw_html_using_user_input
webix.ui({
  id: "mylayout",
  rows: [
    { view: "toolbar", id: "mybar" },
    { template: req.params.oops }
  ]
})


const express = require("express");
var app = express()


import * as Eta from "eta";
app.get("/bad", (_req, _res) => {
// bearer:expected javascript_lang_raw_html_using_user_input
  Eta.render(req.params, { name: "insecure" })
})


var whiskers = require("whiskers");
app.get("/bad", (req, _res) => {
  var context = {}
// bearer:expected javascript_lang_raw_html_using_user_input
  whiskers.render(req.params.text, context)
})


import { Liquid } from 'liquidjs'
const engine = new Liquid()
app.get("/bad", (req, _res) => {
// bearer:expected javascript_lang_raw_html_using_user_input
  engine.parse(req.params.text, { hello: "world" })
})
