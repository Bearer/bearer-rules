# https://www.rubydoc.info/gems/shell/0.7/

# bearer:expected ruby_lang_path_using_user_input
Shell.cd(params[:oops])

# bearer:expected ruby_lang_path_using_user_input
Shell.default_system_path = params[:oops]

# bearer:expected ruby_lang_path_using_user_input
shell = Shell.new(params[:oops], umask)

# bearer:expected ruby_lang_path_using_user_input
shell.pushdir(params[:oops], true)

processor1 = shell.command_processor
# bearer:expected ruby_lang_path_using_user_input
processor1.foreach(params[:oops], rs) {}

processor2 = Shell::CommandProcessor.new(shell)
# bearer:expected ruby_lang_path_using_user_input
processor2.test(:exists?, x, params[:oops])

# bearer:expected ruby_lang_path_using_user_input
processor2[:exists?, x, params[:oops], y]

processor2.transact do
# bearer:expected ruby_lang_path_using_user_input
  test(:exists?, params[:oops])
end

# optional arg
# bearer:expected ruby_lang_path_using_user_input
shell = Shell.new(params[:oops])