# bearer:expected ruby_lang_deserialization_of_user_input
YAML.load(params[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Psych.load(params[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Syck.load(params[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
JSON.load(params[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Oj.load(params[:oops]) do |json|
end
# bearer:expected ruby_lang_deserialization_of_user_input
Oj.object_load(params[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Marshal.load(params[:oops])
# bearer:expected ruby_lang_deserialization_of_user_input
Marshal.restore(params[:oops])
