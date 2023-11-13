def index
  eval(params["my_code"])

  binding.eval(params["my_code"])
end
