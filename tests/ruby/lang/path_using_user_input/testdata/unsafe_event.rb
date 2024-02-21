def my_handler(event:, context:)
# bearer:expected ruby_lang_path_using_user_input
  Dir["foo", base: event["oops"]]

# bearer:expected ruby_lang_path_using_user_input
  Dir.chdir("/home/#{event["oops"]}")

# bearer:expected ruby_lang_path_using_user_input
  File.exist?(event["oops"])

# bearer:expected ruby_lang_path_using_user_input
  IO.readlines("/home/#{event["oops"]}")

# bearer:expected ruby_lang_path_using_user_input
  Kernel.open(event["oops"], "w+") do
  end

# bearer:expected ruby_lang_path_using_user_input
  open(event["oops"])

# bearer:expected ruby_lang_path_using_user_input
  PStore.new(event["oops"])

# bearer:expected ruby_lang_path_using_user_input
  path = Pathname.new(event["oops"])
# bearer:expected ruby_lang_path_using_user_input
  path + event["two"]
# bearer:expected ruby_lang_path_using_user_input
  path / event["two"]
# bearer:expected ruby_lang_path_using_user_input
  path.join("a", event["three"])
end
