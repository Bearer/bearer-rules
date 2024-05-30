from http.server import BaseHTTPRequestHandler

class SomeClass(BaseHTTPRequestHandler):
  def do_GET(self): 
    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    # bearer:expected python_lang_insecure_allow_origin
    self.send_header('Access-Control-Allow-Origin', input())
    self.end_headers()
