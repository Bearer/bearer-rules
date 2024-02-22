# bearer:expected ruby_rails_session_key_using_user_input
session[params[:key]] = 42

# bearer:expected ruby_rails_session_key_using_user_input
session[request.env[:key]] = 42

# bearer:expected ruby_rails_session_key_using_user_input
session["test-#{cookies["oops"]}"] = 42
