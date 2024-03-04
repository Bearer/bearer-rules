let https = require("https"),
  tls = require("tls")

new https.Agent()

new https.Agent({
  rejectUnauthorized: true,
})

// bearer:expected javascript_node_missing_tls_validation
new https.Agent({
  rejectUnauthorized: false,
})

// bearer:expected javascript_node_missing_tls_validation
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

// bearer:expected javascript_node_missing_tls_validation
https.get({
  rejectUnauthorized: false,
})

// bearer:expected javascript_node_missing_tls_validation
new tls.TLSSocket(socket, {
  rejectUnauthorized: false,
})

// bearer:expected javascript_node_missing_tls_validation
tls.connect({
  rejectUnauthorized: false,
})

let socket = new tls.TLSSocket()
// bearer:expected javascript_node_missing_tls_validation
socket.renegotiate({
  rejectUnauthorized: false,
})

let indirect = false
// bearer:expected javascript_node_missing_tls_validation
new https.Agent({
  rejectUnauthorized: indirect,
})
new https.Agent({
  rejectUnauthorized: !false,
})

// bearer:expected javascript_node_missing_tls_validation
https.createServer({
  rejectUnauthorized: false,
})
