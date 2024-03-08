# set_error:
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.email})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.id})")
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

metadata = {
  user_email: current_user.email,
  user_id: 9000,
  auth_level: "admin"
}
# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Authorization", "User logged in", "", metadata)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Navigation", "https://example.com", "", { response: 200 }, Time.now.utc)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.email)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", name: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", id: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.id)
end

# add_exception:
# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.email})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.id})")
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

metadata = {
  user_email: current_user.email,
  user_id: 9000,
  auth_level: "admin"
}
# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Authorization", "User logged in", "", metadata)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Navigation", "https://example.com", "", { response: 200 }, Time.now.utc)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.email)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", name: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", id: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.id)
end

# bearer:expected ruby_third_parties_appsignal
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.id)
end
