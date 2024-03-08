# set_action:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_action("User#show(#{current_user.email})")
Appsignal.set_action("User#show(#{current_user.id})")

# add_breadcrumb:
metadata = {
  user_email: current_user.email,
  user_id: 9000,
  auth_level: "admin"
}
# bearer:expected ruby_third_parties_appsignal
Appsignal.add_breadcrumb("Authorization", "User logged in", "", metadata)
Appsignal.add_breadcrumb("Navigation", "https://example.com", "", { response: 200 }, Time.now.utc)

# add_exception:
# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Email is blacklisted: #{current_user.email}"))
Appsignal.add_exception(StandardError.new("Email is blacklisted: #{current_user.id}"))

# set_error:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Email is blacklisted: #{current_user.email}"))
Appsignal.set_error(StandardError.new("Email is blacklisted: #{current_user.id}"))

# set_metadata:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_metadata("user", current_user.email)
Appsignal.set_metadata("user", current_user.id)

# set_namespace:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_namespace("user.#{current_user.email}")
Appsignal.set_namespace("user.#{current_user.id}")

# set_tags:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_tags(user: current_user.email)
Appsignal.set_tags(user_id: current_user.id)

# tag_job:
# bearer:expected ruby_third_parties_appsignal
Appsignal.tag_job(user_email: current.email, user_id: 9000, auth_level: "admin")
# bearer:expected ruby_third_parties_appsignal
Appsignal.tag_job user: current.email
Appsignal.tag_job(user_id: "12345")

# tag_request:
# bearer:expected ruby_third_parties_appsignal
Appsignal.tag_request(user_email: current.email, user_id: 9000, auth_level: "admin")
# bearer:expected ruby_third_parties_appsignal
Appsignal.tag_request user: current.email
Appsignal.tag_request(user_id: "12345")
