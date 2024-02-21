# bearer:expected ruby_lang_regex_using_user_input
/#{params[:oops]}.*/

# bearer:expected ruby_lang_regex_using_user_input
%r{abc#{params[:oops]}def}

# bearer:expected ruby_lang_regex_using_user_input
Regexp.new(params[:oops])
