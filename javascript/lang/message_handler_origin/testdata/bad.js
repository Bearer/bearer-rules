window.addEventListener('message', (event) => {
  actOnMessage(event.data)
})

addEventListener('message', function (event) {
  actOnMessage(event.data)
})

addEventListener('message', function f(event) {
  actOnMessage(event.data)
})
