# bearer:expected ruby_lang_http_insecure
connection = Excon.new("http://my.api.com/insecure", foo: true)

# bearer:expected ruby_lang_http_insecure
Excon.get("http://my.api.com/insecure", foo: true)
