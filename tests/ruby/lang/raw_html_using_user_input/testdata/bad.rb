"<h1 class=\"test\">#{params[:oops]}</h1>"
"<h1>#{params[:oops]}</h1>"

raw("Hello: #{params[:oops]}")
raw("<h1>#{params[:oops]}</h1>")

"Hello: #{params[:oops]}".html_safe

ERB.new("Test: " + params[:oops])
