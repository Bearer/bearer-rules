uri = URI(params[:oops])

# bearer:expected ruby_lang_http_url_using_user_input
open(uri, "r")

# bearer:expected ruby_lang_http_url_using_user_input
Kernel.open(uri) {}

# bearer:expected ruby_lang_http_url_using_user_input
uri.open
