app.get('/markdown/:content', (req, res) => {
  res.render('index', {
    data: marked(req.params.content),
  })
})