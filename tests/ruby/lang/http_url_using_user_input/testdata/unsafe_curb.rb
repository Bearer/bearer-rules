# https://www.rubydoc.info/github/taf2/curb/

# bearer:expected ruby_lang_http_url_using_user_input
Curl.http("GET", params[:oops], nil) do
end

# bearer:expected ruby_lang_http_url_using_user_input
Curl.get(params[:oops]) {}

# bearer:expected ruby_lang_http_url_using_user_input
Curl::Easy.perform(params[:oops]) {}

# bearer:expected ruby_lang_http_url_using_user_input
easy = Curl::Easy.new(params[:oops]) {}
# bearer:expected ruby_lang_http_url_using_user_input
easy.url = params[:oops2]

easy2 = Curl::Easy.new
# bearer:expected ruby_lang_http_url_using_user_input
easy2.url = params[:oops]

# bearer:expected ruby_lang_http_url_using_user_input
Curl::Multi.get(["https://my.api.com/secure", params[:oops]], {}) {}

# bearer:expected ruby_lang_http_url_using_user_input
Curl::Multi.http([{ url: params[:oops], method: :post }]) {}
