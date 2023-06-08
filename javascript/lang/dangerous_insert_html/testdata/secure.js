function renderListItem(input) {
  this.ref.insertAdjacentHTML("beforebegin", `<li>fixed list item</li>`)
}

function ok1() {
  const name = "<div>it's ok</div>"
  el.innerHTML = name
}

function ok2() {
  const name = "<div>it's ok</div>"
  el.innerHTML = name
}

function ok3(userInput) {
  document.innerHTML = "<div>" + sanitizeHtml(userInput) + "</div>"
}
