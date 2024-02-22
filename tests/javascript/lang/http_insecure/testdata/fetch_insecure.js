const insecure_url = "http://example.com/movies.json";

// bearer:expected javascript_lang_http_insecure
fetch(insecure_url)
	.then((response) => response.json())
	.then((data) => console.log(data));
