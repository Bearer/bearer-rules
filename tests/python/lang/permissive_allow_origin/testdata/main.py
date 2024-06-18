from http.server import BaseHTTPRequestHandler

class BadClass(BaseHTTPRequestHandler):
  def do_GET(self): 
    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    # bearer:expected python_lang_permissive_allow_origin
    self.send_header('Access-Control-Allow-Origin', '*')
    self.end_headers()
    
def aiohttp_bad()(success, message) -> aiohttp.web.Response:
  from aiohttp.web import json_response, Response
  headers = {"Access-Control-Allow-Origin": "*"}
  
  # bearer:expected python_lang_permissive_allow_origin
  Response(
    text=traceback.format_exc(),
    status=aiohttp.web.HTTPInternalServerError.status_code,
    headers=headers
  )
  # bearer:expected python_lang_permissive_allow_origin
  return json_response(
    {
      "result": success,
      "msg": message
    },
    headers=headers,
    status=200 if success else 500,
  )  
                  
class OkClass(BaseHTTPRequestHandler):
  def do_GET(self): 
    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    self.send_header('Access-Control-Allow-Origin', 'https://my-example-site.com')
    self.end_headers()
    
def aiohttp_ok()(success, message) -> aiohttp.web.Response:
  from aiohttp.web import json_response, Response
  headers = {"Access-Control-Allow-Origin": "https://example.com"}
  # ok - headers not permissive
  Response(
    text=traceback.format_exc(),
    status=aiohttp.web.HTTPInternalServerError.status_code,
    headers=headers
  )

  # ok - no headers
  return aiohttp.web.json_response(
    {
      "result": success,
      "msg": message
    },
    status=200 if success else 500,
  )  