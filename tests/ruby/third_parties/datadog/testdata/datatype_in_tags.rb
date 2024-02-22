Datadog.configure do |c|
  user = { email: "someone@example.com" }
# bearer:expected ruby_third_parties_datadog
  c.tags = user
end

span = Datadog.configuration[:cucumber][:tracer].active_span
# bearer:expected ruby_third_parties_datadog
span.set_tag('user.email', user.email)

# bearer:expected ruby_third_parties_datadog
Datadog::Tracing.active_span&.set_tag('customer.id', user.email)
# bearer:expected ruby_third_parties_datadog
Datadog::Tracing.active_span.set_tag('customer.id', user.email)

# bearer:expected ruby_third_parties_datadog
Datadog::Tracing.trace("web.request", tags: { email: user.email }) do |span, trace|
  call
end

Datadog::Tracing.trace("web.request") do |span, trace|
# bearer:expected ruby_third_parties_datadog
  span.set_tag('user.email', user.email)
end
