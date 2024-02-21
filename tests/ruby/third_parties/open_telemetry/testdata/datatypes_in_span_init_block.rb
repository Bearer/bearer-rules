# add attributes at span creation
# bearer:expected ruby_third_parties_open_telemetry
Tracer.in_span("data leaking", attributes: { "current_user" => user.email, "date" => DateTime.now }) do |span|
  puts "in the span block"
end

# bearer:expected ruby_third_parties_open_telemetry
SomeOtherTracer.in_span("data leaking", attributes: { "current_user" => user.email, "date" => DateTime.now }) do |span|
# bearer:expected ruby_third_parties_open_telemetry
  span.add_attributes(user.email)
end

YetAnotherTracer.in_span("data leaking", attributes: { "date" => DateTime.now }) do |span|
# bearer:expected ruby_third_parties_open_telemetry
  span.add_event("leaking data for #{user.email}")
end
