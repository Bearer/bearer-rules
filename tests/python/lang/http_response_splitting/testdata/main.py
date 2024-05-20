# this file is also testing the shared instance rule

from http.server import BaseHTTPRequestHandler

class WebRequestHandler(BaseHTTPRequestHandler, Foo):
    def do_GET(self):
        self.send_header("ok", "ok")
        
        # bearer:expected python_lang_http_response_splitting
        self.send_header(input(), "ok")

    def do_POST(self):
        self.send_header(input().replace("\r\n", ""), "ok")
        self.send_header("ok", input().replace("\r\n", ""))
        
        # bearer:expected python_lang_http_response_splitting
        self.send_header("ok", input())


# contrived examples for testing instance rule
class Other:
    def m(self, x: BaseHTTPRequestHandler) -> string:
        1+1
        # bearer:expected python_lang_http_response_splitting
        x.send_header(input(), "ok")

        y = BaseHTTPRequestHandler(foo)
        # bearer:expected python_lang_http_response_splitting
        y.send_header(input(), "ok")

    def m(self, z: BaseHTTPRequestHandler = default) -> string:
        1+1
        # bearer:expected python_lang_http_response_splitting
        z.send_header(input(), "ok")
