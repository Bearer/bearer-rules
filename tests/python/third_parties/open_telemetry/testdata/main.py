from opentelemetry import trace

def bad():
  tracer = trace.get_tracer("my-trace.tracer")
  with tracer.start_as_current_span("my-span") as span:
    # bearer:expected python_third_parties_open_telemetry
    span.set_attribute("user", user.email)
    # bearer:expected python_third_parties_open_telemetry
    span.add_event("my-event", { "user": user.email })
    
  span = tracer.get_current_span()
  # bearer:expected python_third_parties_open_telemetry
  span.set_attributes({
    "user": user.email
  })
  
def ok():
  tracer = trace.get_tracer("my-trace.tracer")
  with tracer.start_as_current_span("my-span") as span:
    span.set_attribute("user", user.uuid)
