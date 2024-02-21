# bearer:expected ruby_lang_raw_html_using_user_input
"<h1 class=\"test\">#{params[:oops]}</h1>"
# bearer:expected ruby_lang_raw_html_using_user_input
"<h1>#{params[:oops]}</h1>"

# bearer:expected ruby_lang_raw_html_using_user_input
raw("Hello: #{params[:oops]}")
# bearer:expected ruby_lang_raw_html_using_user_input
raw("<h1>#{params[:oops]}</h1>")

# bearer:expected ruby_lang_raw_html_using_user_input
"Hello: #{params[:oops]}".html_safe

# bearer:expected ruby_lang_raw_html_using_user_input
ERB.new("Test: " + params[:oops])
