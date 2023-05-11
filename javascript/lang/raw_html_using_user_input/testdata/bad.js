`<h1 class="test">${req.params.oops}</h1>`
`<h1>${req.params.oops}</h1>`

doT.compile(req.params.oops, {})

ejs.compile(req.params.oops, {})

Handlebars.compile(req.params.oops, {})

Hogan.parse(Hogan.scan(req.params.oops), null)

$.templates(req.params.oops)

template(req.params.oops, {})
_.template(req.params.oops, {})

compiler.compileSync(req.params.oops, "test.js")

Mustache.render(req.params.oops, {})

nunjucks.renderString(req.params.oops, {})

pug.render(req.params.oops, {})

Sqrl.render(req.params.oops, {})

Template7.compile(req.params.oops, {})

webix.ui({
  id: "mylayout",
  rows: [
    { view: "toolbar", id: "mybar" },
    { template: req.params.oops }
  ]
})
