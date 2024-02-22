const insecure_url = "http://domain.com/api/movies";
const config = {
	method: "GET",
	headers: { "content-type": "application/json" },
	url: insecure_url,
};
// bearer:expected javascript_lang_http_insecure
axios(config);
