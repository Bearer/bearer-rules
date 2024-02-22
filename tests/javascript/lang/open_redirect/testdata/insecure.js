var myPath = new URLSearchParams(window.location)
var myPath2 = new URL(location.href)

// bearer:expected javascript_lang_open_redirect
window.location.href = myPath
// bearer:expected javascript_lang_open_redirect
location.href = myPath2
