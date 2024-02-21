# https://www.rubydoc.info/github/taf2/curb/

# bearer:expected ruby_lang_http_insecure
Curl.http("GET", "http://my.api.com/users/search", nil) do
end

# bearer:expected ruby_lang_http_insecure
Curl.get("http://my.api.com/users/search") {}

# bearer:expected ruby_lang_http_insecure
Curl::Easy.perform("http://my.api.com/users/search") {}

# bearer:expected ruby_lang_http_insecure
easy = Curl::Easy.new("http://my.api.com/users/search") {}
# bearer:expected ruby_lang_http_insecure
easy.url = "http://my.api.com/customers"

easy2 = Curl::Easy.new
# bearer:expected ruby_lang_http_insecure
easy2.url = "http://my.api.com/users/search"

# bearer:expected ruby_lang_http_insecure
Curl::Multi.get(["https://my.api.com/secure", "http://my.api.com/users/search"], {}) {}

# bearer:expected ruby_lang_http_insecure
Curl::Multi.http([{ url: "http://my.api.com/users/search", method: :post }]) {}
