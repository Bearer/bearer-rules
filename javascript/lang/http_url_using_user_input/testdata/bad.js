const url = req.body.imageUrl


// Axios

axios({ url: url })

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
