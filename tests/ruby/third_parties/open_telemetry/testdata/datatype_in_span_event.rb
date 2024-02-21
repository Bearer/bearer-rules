span = OpenTelemetry::Trace.current_span
# bearer:expected ruby_third_parties_open_telemetry
span.add_event("Schedule job for user: #{current_user.email}")
# bearer:expected ruby_third_parties_open_telemetry
span.add_event("Cancel job for user", attributes: {
  "current_user" => current_user.email
})