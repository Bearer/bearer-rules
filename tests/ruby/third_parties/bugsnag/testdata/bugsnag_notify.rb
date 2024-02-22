begin
  raise CustomException.new(current_user.email)
rescue => exception
  Bugsnag.notify(exception)
end

Bugsnag.notify(exception) do |event|
  # Adjust the severity of this error
  event.severity = "warning"

  # Add customer information to this event
# bearer:expected ruby_third_parties_bugsnag
  event.add_metadata(:account, {
    user_name: current_user.name,
    paying_customer: true
  })
end