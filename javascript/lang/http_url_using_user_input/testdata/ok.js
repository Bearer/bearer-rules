const url = "https://safe.example.com"


// Axios

axios(url)

axios.get(url)


// Fetch

fetch(url)


// XMLHttpRequest

var xhttp = new XMLHttpRequest()
xhttp.open('GET', url)


// Request

const request = require('request')
const imageRequest = request.get(url)

request(url, function () {})

export const handler = async (event, context) => {
  axios.get(url)
}

exports.handler = async function (event, context) {
  axios.get(url)
}
