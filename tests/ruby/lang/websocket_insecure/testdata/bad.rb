# bearer:expected ruby_lang_websocket_insecure
Kontena::Websocket::Client.connect("ws://insecure.com", open_timeout: 10) {}

# bearer:expected ruby_lang_websocket_insecure
WebSocket::Client::Simple.connect("ws://insecure.com", {}) {}
# bearer:expected ruby_lang_websocket_insecure
WebSocket::Client::Simple::Client.new.connect("ws://insecure.com", {})

# bearer:expected ruby_lang_websocket_insecure
Faye::WebSocket::Client.new("ws://insecure.com", nil)

# bearer:expected ruby_lang_websocket_insecure
WebSocket::Handshake::Client.new(url: "ws://insecure.com")
# bearer:expected ruby_lang_websocket_insecure
WebSocket::Handshake::Client.new(secure: false, host: "insecure.com")
