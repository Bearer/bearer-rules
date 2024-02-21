# bearer:expected ruby_lang_path_using_user_input
Dir["foo", base: params[:oops]]

# bearer:expected ruby_lang_path_using_user_input
Dir.chdir("/home/#{params[:oops]}")

# bearer:expected ruby_lang_path_using_user_input
File.exist?(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
IO.readlines("/home/#{params[:oops]}")

# bearer:expected ruby_lang_path_using_user_input
Kernel.open(params[:oops], "w+") do
end

# bearer:expected ruby_lang_path_using_user_input
open(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
PStore.new(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
path = Pathname.new(params[:oops])
# bearer:expected ruby_lang_path_using_user_input
path + params[:two]
# bearer:expected ruby_lang_path_using_user_input
path / params[:three]
# bearer:expected ruby_lang_path_using_user_input
path.join("a", params[:four])

# bearer:expected ruby_lang_path_using_user_input
Rails.root.join(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
Gem::Util.traverse_parents(params[:oops]) {}
