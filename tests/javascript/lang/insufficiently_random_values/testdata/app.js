// Use bearer:expected javascript_lang_insufficiently_random_values to flag expected findings
const crypto = require("crypto")

function generateToken() {
  let token = ""
  for (let i = 0; i < 16; i++) {
    // bearer:expected javascript_lang_insufficiently_random_values
    token += Math.floor(crypto.pseudoRandomBytes() * 16).toString(16)
  }
  return token
}

function generateToken2() {
  let token = ""
  for (let i = 0; i < 16; i++) {
    // bearer:expected javascript_lang_insufficiently_random_values
    token += Math.floor(Math.random() * 16).toString(16)
  }
  return token
}

function generateSecureToken() {
  return crypto.randomBytes(16).toString("hex")
}
