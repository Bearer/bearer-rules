"<h1>#{strip_tags(params[:ok])}</h1>"

raw("Hello: #{sanitize(params[:ok])}")

"Hello: #{sanitize(params[:ok])}".html_safe

ERB.new("Test: " + strip_tags(params[:ok]))
