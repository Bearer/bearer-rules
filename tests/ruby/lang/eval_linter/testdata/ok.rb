# these still post security risk but they should not be caught by our eval linter
def index
  Foo.class_eval(params["my_code"])

  foo.instance_eval(params["my_code"])
end
