import http.client

user_input = input()

conn = http.client.HTTPSConnection("https://api.example.com")
# bearer:expected python_lang_insecure_http
conn = http.client.HTTPSConnection("http://api.example.com")

conn = http.client.HTTPSConnection("wss://api.example.com")
# bearer:expected python_lang_insecure_http
conn = http.client.HTTPSConnection("ws://api.example.com")
