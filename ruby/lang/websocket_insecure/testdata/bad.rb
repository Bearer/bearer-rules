Kontena::Websocket::Client.connect("ws://insecure.com", open_timeout: 10) {}

WebSocket::Client::Simple.connect("ws://insecure.com", {}) {}
WebSocket::Client::Simple::Client.new.connect("ws://insecure.com", {})

Faye::WebSocket::Client.new("ws://insecure.com", nil)

WebSocket::Handshake::Client.new(url: "ws://insecure.com")
WebSocket::Handshake::Client.new(secure: false, host: "insecure.com")
