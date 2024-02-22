require(path);

app.get("/bad", (req, _res) => {
	try {
		const { path } = req.query;

// bearer:expected javascript_lang_import_using_user_input
		require(path);
	} catch (err) {
		// handle error
	}
});
