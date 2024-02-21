# bearer:expected ruby_lang_http_insecure
response = Net::HTTP.post_form("http://my.api.com/users/search", email: user.email)
