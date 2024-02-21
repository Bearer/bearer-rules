# bearer:expected ruby_lang_format_string_using_user_input
sprintf("Value: #{params[:value]} %d", x)

# bearer:expected ruby_lang_format_string_using_user_input
Kernel.printf("Value: #{params[:value]} %d", x)

# bearer:expected ruby_lang_format_string_using_user_input
"Value: #{params[:value]} %s" % [x]
