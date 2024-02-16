# stdlib

# bearer:expected ruby_lang_exec_using_user_input
Kernel.exec(params[:oops])

# bearer:expected ruby_lang_exec_using_user_input
spawn(params[:oops])

# bearer:expected ruby_lang_exec_using_user_input
IO.popen(params[:oops]) {}

# bearer:expected ruby_lang_exec_using_user_input
Process.exec(params[:oops])

# bearer:expected ruby_lang_exec_using_user_input
Open3.popen3(["cmd", params[:oops]], "abc") {}

# bearer:expected ruby_lang_exec_using_user_input
Gem::Util.silent_system(x, params[:oops])

# bearer:expected ruby_lang_exec_using_user_input
PTY.spawn("/bin/#{params[:oops]}") {}

# bearer:expected ruby_lang_exec_using_user_input
%x{/bin/#{params[:oops]}}

# bearer:expected ruby_lang_exec_using_user_input
`/bin/#{params[:oops]}`
