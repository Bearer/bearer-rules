# bearer:expected ruby_rails_render_using_user_input
render html: params[:oops]
# bearer:expected ruby_rails_render_using_user_input
render inline: "<h1>#{params[:oops]}</h1>"

# bearer:expected ruby_rails_render_using_user_input
send_data params[:user_input], type: content_type, disposition: "inline"
# bearer:expected ruby_rails_render_using_user_input
send_data params[:user_input], type: content_type, disposition: unknown
