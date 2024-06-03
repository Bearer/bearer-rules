from ddtrace import tracer

@tracer.wrap()
def execute():
  span = tracer.current_span()
  # bearer:expected python_third_parties_datadog
  span.set_tag('user', user.email)
  
span = tracer.start_span("web.request")
# bearer:expected python_third_parties_datadog
span.set_tags('user', user.email)
  
span = tracer.trace("web.request")
# bearer:expected python_third_parties_datadog
span.set_struct_tag('user', { "email": user.email })

root_span = tracer.current_root_span()
# bearer:expected python_third_parties_datadog
span.set_tag_str('user', user.email)
