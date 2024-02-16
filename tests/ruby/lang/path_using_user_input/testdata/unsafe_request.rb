# bearer:expected ruby_lang_path_using_user_input
Dir["foo", base: request.env[:oops]]

# bearer:expected ruby_lang_path_using_user_input
Dir.chdir("/home/#{request.env[:oops]}")

# bearer:expected ruby_lang_path_using_user_input
File.exist?(request.env[:oops])

# bearer:expected ruby_lang_path_using_user_input
IO.readlines("/home/#{request.env[:oops]}")

# bearer:expected ruby_lang_path_using_user_input
Kernel.open(request.env[:oops], "w+") do
end

# bearer:expected ruby_lang_path_using_user_input
open(request.env[:oops])

# bearer:expected ruby_lang_path_using_user_input
PStore.new(request.env[:oops])

# bearer:expected ruby_lang_path_using_user_input
path = Pathname.new(request.env[:oops])
# bearer:expected ruby_lang_path_using_user_input
path + request.headers[:oops]
# bearer:expected ruby_lang_path_using_user_input
path / request.query_parameters[:oops]
# bearer:expected ruby_lang_path_using_user_input
path.join("a", request.body)
