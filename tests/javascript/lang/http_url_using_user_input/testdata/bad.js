const url = req.body.imageUrl


// Axios

// bearer:expected javascript_lang_http_url_using_user_input
axios({ url: url })

// bearer:expected javascript_lang_http_url_using_user_input
axios.get(url)


// Fetch

// bearer:expected javascript_lang_http_url_using_user_input
fetch(url)


// XMLHttpRequest

var xhttp = new XMLHttpRequest()
// bearer:expected javascript_lang_http_url_using_user_input
xhttp.open('GET', url)


// Request

const request = require('request')
// bearer:expected javascript_lang_http_url_using_user_input
const imageRequest = request.get(url)

// bearer:expected javascript_lang_http_url_using_user_input
request(url, function () {})


export const handler = async (event, context) => {
// bearer:expected javascript_lang_http_url_using_user_input
  axios.get(event.url)
}

exports.handler = async function (event, context) {
// bearer:expected javascript_lang_http_url_using_user_input
  axios.get(event["url"])
}
