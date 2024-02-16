# https://docs.ruby-lang.org/en/master/Net/HTTP.html

# bearer:expected ruby_lang_http_url_using_user_input
response = Net::HTTP.post_form("http://#{params[:oops]}/users/search")

# bearer:expected ruby_lang_http_url_using_user_input
Net::HTTP.start(params[:host]) do |instance1|
# bearer:expected ruby_lang_http_url_using_user_input
  instance1.head(params[:path])
end

# bearer:expected ruby_lang_http_url_using_user_input
Net::HTTP::Get.new(params[:oops], { "X-Test": 42 })

# bearer:expected ruby_lang_http_url_using_user_input
instance2 = Net::HTTP.start(params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
instance2.ipaddr = request.env[:oops]
# bearer:expected ruby_lang_http_url_using_user_input
instance2.send_request("GET", params[:oops], nil)

# bearer:expected ruby_lang_http_url_using_user_input
instance3 = Net::HTTP.new(params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
instance3.patch(params[:path])
instance3.start do |instance4|
# bearer:expected ruby_lang_http_url_using_user_input
  instance4.post(request.env[:oops])
end
