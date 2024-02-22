function renderListItem(input) {
// bearer:expected javascript_lang_dangerous_insert_html
  document.write(`<li>${input}</li>`)
}

const el = element.innerHTML

function bad1(userInput) {
// bearer:expected javascript_lang_dangerous_insert_html
  el.innerHTML = "<div>" + userInput + "</div>"
}

function bad2(userInput) {
// bearer:expected javascript_lang_dangerous_insert_html
  document.body.outerHTML = userInput
}

function bad3(userInput) {
  const name = "<div>" + userInput + "</div>"
// bearer:expected javascript_lang_dangerous_insert_html
  document.write(name)
}
