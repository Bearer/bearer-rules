params[:class].constantize
params[:oops].classify.safe_constantize

raise if current_user.try(params[:profession]) == "hacker"

