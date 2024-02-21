# https://www.rubydoc.info/gems/shell/0.7/

# bearer:expected ruby_lang_exec_using_user_input
Shell.alias_command("foo", params[:oops]) {}
# bearer:expected ruby_lang_exec_using_user_input
Shell::CommandProcessor.alias_command(x, "/bin/#{params[:oops]}") {}

# bearer:expected ruby_lang_exec_using_user_input
Shell.def_system_command("foo", "bar", params[:oops]) {}
# bearer:expected ruby_lang_exec_using_user_input
Shell::CommandProcessor.def_system_command("foo", params[:oops]) {}

shell = Shell.new(Dir.pwd)

processor1 = shell.command_processor
# bearer:expected ruby_lang_exec_using_user_input
processor1.system(params[:oops])

processor2 = Shell::CommandProcessor.new(shell)
# bearer:expected ruby_lang_exec_using_user_input
processor2.system(x, params[:oops])
