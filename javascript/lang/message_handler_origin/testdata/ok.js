window.addEventListener('message', (event) => {
  if (event.origin != 'https://myapp.example.com') {
    throw new Error('invalid origin')
  } else {
    actOnMessage(event.data)
  }
})
