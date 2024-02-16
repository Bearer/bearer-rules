# bearer:expected ruby_lang_path_using_user_input
Rails.root.join(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
render(partial: params[:oops])
# bearer:expected ruby_lang_path_using_user_input
render("something/#{params[:oops]}")
# bearer:expected ruby_lang_path_using_user_input
render_to_string({ file: "/templates/#{params[:oops]}" })

# bearer:expected ruby_lang_path_using_user_input
send_file params[:oops], type: "text/html"
