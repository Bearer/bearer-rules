# Use  to flag expected findings
import rollbar

rollbar.init('ACCESS_TOKEN', 'production')

try:
  # some risky code
except MyError:
  # bearer:expected python_third_parties_rollbar
  rollbar.report_message(f"some weird happened for {user.email}", "info")
  # ok 
  rollbar.report_message(f"some weird happened for {user.uuid}", "error")
except:
  rollbar.report_exc_info()
