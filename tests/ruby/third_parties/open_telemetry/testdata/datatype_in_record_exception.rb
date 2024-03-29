# set status
current_span = OpenTelemetry::Trace.current_span

begin
  1/0 # something that obviously fails
rescue
  1+1
  # bearer:expected ruby_third_parties_open_telemetry
  current_span.status = OpenTelemetry::Trace::Status.error("error for user #{current_user.email}")
end

# record exception to span (recommended together with set status)
current_span = OpenTelemetry::Trace.current_span
begin
  1/0 # something that obviously fails
rescue Exception => ex
  current_span.status = OpenTelemetry::Trace::Status.error("error message here!")
  current_span.record_exception(ex)
  # bearer:expected ruby_third_parties_open_telemetry
  current_span.record_exception(ex, attributes: { "user.ip" => user.ip_address })
end