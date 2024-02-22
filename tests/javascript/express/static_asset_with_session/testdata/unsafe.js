app.use(session({}))
app.use(other())
// bearer:expected javascript_express_static_asset_with_session
app.use(express.static(__dirname + "/public"))
