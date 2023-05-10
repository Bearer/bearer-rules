`<h1>#{sanitizeHtml(req.params.ok)}</h1>`

doT.compile(sanitizeHtml(req.params.ok), {})

ejs.compile(sanitizeHtml(req.params.ok), {})

Handlebars.compile(sanitizeHtml(req.params.ok), {})

Hogan.parse(Hogan.scan(sanitizeHtml(req.params.ok)), null)

$.templates(sanitizeHtml(req.params.ok))

template(sanitizeHtml(req.params.ok), {})
_.template(sanitizeHtml(req.params.ok), {})

compiler.compileSync(sanitizeHtml(req.params.ok), "test.js")

Mustache.render(sanitizeHtml(req.params.ok), {})

nunjucks.renderString(sanitizeHtml(req.params.ok), {})

pug.render(sanitizeHtml(req.params.ok), {})

Sqrl.render(sanitizeHtml(req.params.ok), {})

Template7.compile(sanitizeHtml(req.params.ok), {})

webix.ui({
  id: "mylayout",
  rows: [
    { view: "toolbar", id: "mybar" },
    { template: sanitizeHtml(req.params.ok) }
  ]
})
