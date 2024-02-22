# critical risk: application has sensitive data
class User
  attr_reader :name, :email, :password
end

Rails.application.configure do
# bearer:expected ruby_rails_insecure_communication
  config.force_ssl = false
end

