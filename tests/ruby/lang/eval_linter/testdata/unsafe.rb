def index
  eval("def hello_world; puts 'Hello world!'; end")

  some_arg = "def test; end"
  binding.eval(some_arg)
end
