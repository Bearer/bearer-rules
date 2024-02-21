# bearer:expected ruby_lang_deserialization_of_user_input
YAML.load(request.env[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Psych.load(request.env[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Syck.load(request.env[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
JSON.load(request.env[:oops])

# bearer:expected ruby_lang_deserialization_of_user_input
Oj.load(request.env[:oops])
# bearer:expected ruby_lang_deserialization_of_user_input
Oj.object_load(request.env[:oops]) do |json|
end

# bearer:expected ruby_lang_deserialization_of_user_input
Marshal.load(request.env[:oops])
# bearer:expected ruby_lang_deserialization_of_user_input
Marshal.restore(request.env[:oops])
