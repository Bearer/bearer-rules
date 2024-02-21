# bearer:expected ruby_lang_http_insecure
uri = URI('http://my.api.com/users/search')
uri.query = URI.encode_www_form("hello-world")