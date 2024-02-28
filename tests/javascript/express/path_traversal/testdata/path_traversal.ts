import { resolve, join } from 'path';
var express = require("express")

var app = express()

app.get("/bad", (req, _res) => {
  // bearer:expected javascript_express_path_traversal
  join("/public/", req.query.path)
  // bearer:expected javascript_express_path_traversal
  resolve(req.query.path)
})