# bearer:expected ruby_lang_http_url_using_user_input
connection = Excon.new(params[:oops], foo: true)
# bearer:expected ruby_lang_http_url_using_user_input
connection2 = Excon.new("http://example.com", path: params[:oops])

# bearer:expected ruby_lang_http_url_using_user_input
connection3 = Excon::Connection.new(host: params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
connection4 = Excon::Connection.new(hostname: params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
connection5 = Excon::Connection.new(path: params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
connection6 = Excon::Connection.new(port: params[:oops])

# bearer:expected ruby_lang_http_url_using_user_input
connection.post(path: params[:oops])

# bearer:expected ruby_lang_http_url_using_user_input
connection2.request(path: params[:oops])

# bearer:expected ruby_lang_http_url_using_user_input
connection3.requests([{ :method => :get, path: params[:oops] }])

# bearer:expected ruby_lang_http_url_using_user_input
Excon.get(params[:oops])
# bearer:expected ruby_lang_http_url_using_user_input
Excon.post("http://example.com", path: params[:oops])
