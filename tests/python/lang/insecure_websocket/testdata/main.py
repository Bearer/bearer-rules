async def websockets():
    import websockets

    await websockets.connect("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    await websockets.connect("ws://example.com")

    from websockets.client import connect as connect_async
    from websockets.sync.client import connect as connect_sync
    
    connect_sync("wss://example.com")
    await connect_async("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    connect_sync("ws://example.com")
    # bearer:expected python_lang_insecure_websocket
    await connect_async("ws://example.com")
    
def websocket():
  import websocket
  # bearer:expected python_lang_insecure_websocket
  websocket.WebSocketApp("ws://example.com")
  ws = websocket.WebSocket()
  # bearer:expected python_lang_insecure_websocket
  ws.connect("ws://example.com")

def socketio():
    import socketio

    sio = socketio.Client()
    sio.connect("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    sio.connect("ws://example.com")

    sio2 = socketio.AsyncClient()
    await sio2.connect("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    await sio2.connect("ws://example.com")

    sio3 = socketio.SimpleClient()
    sio3.connect("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    sio3.connect("ws://example.com")

    sio4 = socketio.AsyncSimpleClient()
    await sio4.connect("wss://example.com")
    # bearer:expected python_lang_insecure_websocket
    await sio4.connect("ws://example.com")
