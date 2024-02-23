// Use bearer:expected javascript_lang_observable_timing to flag expected findings

// bearer:expected javascript_lang_observable_timing
password == "zDE9ET!TDq2uZx2oM!FD2"
// bearer:expected javascript_lang_observable_timing
"zDE9ET!TDq2uZx2oM!FD2" == password
// bearer:expected javascript_lang_observable_timing
"zDE9ET!TDq2uZx2oM!FD2" === password
// bearer:expected javascript_lang_observable_timing
password == passwordInput
// bearer:expected javascript_lang_observable_timing
hash === verify.toString("base64")

function isAuthenticated(username, input) {
  var user = FetchUserFromDB(username)
  if (input.length !== user.token.length) {
    return false
  }

  // bearer:expected javascript_lang_observable_timing
  return input === user.token
}

if (password !== null) {
}

// bearer:expected javascript_lang_observable_timing
if (apiToken === "zDE9ET!TDq2uZx2oM!FD2") {
}

if (inputToken.length !== secretToken.length) {
  return false
}
