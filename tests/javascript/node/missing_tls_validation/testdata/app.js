function bad() {
  // bearer:expected javascript_node_missing_tls_validation
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

function bad2() {
  // bearer:expected javascript_node_missing_tls_validation
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
}

function ok() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
}