Kontena::Websocket::Client.connect("wss://secure.com", open_timeout: 10) {}

WebSocket::Client::Simple.connect("wss://secure.com", {}) {}
WebSocket::Client::Simple.new.connect("wss://secure.com", {})

Faye::WebSocket::Client.new("wss://secure.com", nil)

WebSocket::Handshake::Client.new(url: "wss://secure.com")
WebSocket::Handshake::Client.new(secure: true, host: "secure.com")

Faye::WebSocket::Client.new("ws://localhost", nil)
Faye::WebSocket::Client.new("ws://127.0.0.1", nil)
