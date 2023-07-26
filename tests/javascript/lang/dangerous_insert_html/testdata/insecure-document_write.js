function renderListItem(input) {
  document.write(`<li>${input}</li>`)
}

const el = element.innerHTML

function bad1(userInput) {
  el.innerHTML = "<div>" + userInput + "</div>"
}

function bad2(userInput) {
  document.body.outerHTML = userInput
}

function bad3(userInput) {
  const name = "<div>" + userInput + "</div>"
  document.write(name)
}
