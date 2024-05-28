from http.server import BaseHTTPRequestHandler

class BadClass(BaseHTTPRequestHandler):
  def do_GET(self): 
    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    # bearer:expected python_lang_permissive_allow_origin
    self.send_header('Access-Control-Allow-Origin', '*')
    self.end_headers()
    
class OkClass(BaseHTTPRequestHandler):
  def do_GET(self): 
    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    self.send_header('Access-Control-Allow-Origin', 'https://my-example-site.com')
    self.end_headers()