def handler(event:, context:)
# bearer:expected ruby_lang_deserialization_of_user_input
  YAML.load(event["oops"])

# bearer:expected ruby_lang_deserialization_of_user_input
  Psych.load(event["oops"])

# bearer:expected ruby_lang_deserialization_of_user_input
  Syck.load(event["oops"])

# bearer:expected ruby_lang_deserialization_of_user_input
  JSON.load(event["oops"])

# bearer:expected ruby_lang_deserialization_of_user_input
  Oj.load(event["oops"])
# bearer:expected ruby_lang_deserialization_of_user_input
  Oj.object_load(event["oops"]) do |json|
  end

# bearer:expected ruby_lang_deserialization_of_user_input
  Marshal.load(event["oops"])
# bearer:expected ruby_lang_deserialization_of_user_input
  Marshal.restore(event["oops"])
end
