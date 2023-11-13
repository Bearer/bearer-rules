# user input is present - linter rule should not pick this up
def index
  eval(params["my_code"])

  binding.eval(params["my_code"])
end
