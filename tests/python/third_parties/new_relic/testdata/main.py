from newrelic import agent

# bearer:expected python_third_parties_new_relic
agent.record_log_event(f"User: {user.fullname}")

# bearer:expected python_third_parties_new_relic
agent.add_custom_attribute("name", user.fullname)

# bearer:expected python_third_parties_new_relic
agent.add_custom_attributes(
  [("name", user.fullname)]
)

application = agent.application()
# bearer:expected python_third_parties_new_relic
agent.record_custom_event('my-event-type', {'user':user.email}, application)
    
# bearer:expected python_third_parties_new_relic
agent.record_custom_metric('name', user.fullname, application=None)
# bearer:expected python_third_parties_new_relic
agent.record_custom_metrics([("name", user.fullname)], application=None)

# bearer:expected python_third_parties_new_relic
agent.notice_error(attributes={'user': user.email}, ignore=False)

with agent.FunctionTrace(name='my-trace'):
  # bearer:expected python_third_parties_new_relic
  agent.add_custom_span_attribute('name', user.fullname)
  
# ok
agent.add_custom_attribute("user", user.uuid)