# set_error:
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_action("User#show(#{current_user.email})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.id})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
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
Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.add_breadcrumb("Authorization", "User logged in", "", metadata)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Navigation", "https://example.com", "", { response: 200 }, Time.now.utc)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_metadata("user", current_user.email)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.id)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.tag_job(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.id)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_sample_data("user", name: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", id: user.id)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_tags(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.id)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.tag_request(user: user.name)
end

Appsignal.set_error(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.id)
end

# add_exception:
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_action("User#show(#{current_user.email})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action("User#show(#{current_user.id})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
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
Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.add_breadcrumb("Authorization", "User logged in", "", metadata)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.add_breadcrumb("Navigation", "https://example.com", "", { response: 200 }, Time.now.utc)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_action_if_nil("User#show(#{current_user.email})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_action_if_nil("User#show(#{current_user.id})")
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_metadata("user", current_user.email)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_metadata("user", current_user.id)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.tag_job(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_job(user: user.id)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_sample_data("user", name: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_sample_data("user", id: user.id)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.set_tags(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.set_tags(user: user.id)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  # bearer:expected ruby_third_parties_appsignal
  transaction.tag_request(user: user.name)
end

Appsignal.add_exception(StandardError.new("Error")) do |transaction|
  transaction.tag_request(user: user.id)
end
