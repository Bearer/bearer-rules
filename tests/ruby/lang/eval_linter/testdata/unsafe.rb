def index
# bearer:expected ruby_lang_eval_linter
  eval("def hello_world; puts 'Hello world!'; end")

  some_arg = "def test; end"
# bearer:expected ruby_lang_eval_linter
  binding.eval(some_arg)
end
