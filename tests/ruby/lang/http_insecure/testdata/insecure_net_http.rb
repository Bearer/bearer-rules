# https://docs.ruby-lang.org/en/master/Net/HTTP.html

# bearer:expected ruby_lang_http_insecure
response = Net::HTTP.post_form("http://my.api.com/users/search")

# bearer:expected ruby_lang_http_insecure
Net::HTTP.start("http://my.api.com/users/search") do
end

# bearer:expected ruby_lang_http_insecure
Net::HTTP::Get.new("http://my.api.com/users/search", { "X-Test": 42 })
