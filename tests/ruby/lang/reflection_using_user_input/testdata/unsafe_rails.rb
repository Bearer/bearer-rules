params[:class].constantize

raise if current_user.try(params[:profession]) == "hacker"
