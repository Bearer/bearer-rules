app.get('/markdown/:content', (req, res) => {
  res.render('index', {
    // bearer:expected javascript_third_parties_marked
    data: marked(req.params.content),
  })
})