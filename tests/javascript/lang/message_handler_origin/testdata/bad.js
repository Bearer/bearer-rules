// bearer:expected javascript_lang_message_handler_origin
window.addEventListener('message', (event) => {
  actOnMessage(event.data)
})

// bearer:expected javascript_lang_message_handler_origin
addEventListener('message', function (event) {
  actOnMessage(event.data)
})

// bearer:expected javascript_lang_message_handler_origin
addEventListener('message', function f(event) {
  actOnMessage(event.data)
})
