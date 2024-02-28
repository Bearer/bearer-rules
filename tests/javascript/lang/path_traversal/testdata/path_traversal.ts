import { resolve, join } from 'path';
var express = require("express")

var app = express()

export function bad(path: string) {
  // bearer:expected javascript_lang_path_traversal
  join("/public/", path)
  // bearer:expected javascript_lang_path_traversal
  resolve("foo" + path)
}

app.get("/caught_by_express", (req, _res) => {
  join("/public/", req.query.path)
  resolve(req.query.path)
})

export class Env {
  public readonly dir: string;

  constructor(public readonly configDir: string) {
    // bearer:expected javascript_lang_path_traversal
    this.dir = resolve(configDir, 'config');
  }
}