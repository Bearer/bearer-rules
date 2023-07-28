uri = URI(params[:oops])

open(uri, "r")

Kernel.open(uri) {}

uri.open
