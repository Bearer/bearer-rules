import scout_apm.api

def bad():
  with scout_apm.api.instrument("successful_logout") as instrument:
    # bearer:expected python_third_parties_scout_apm
    instrument.tag("user_email", current_user.email)
  
  # bearer:expected python_third_parties_scout_apm
  with scout_apm.api.instrument("successful_logout", { "user": current_user.email }) as instrument:
    # do stuff

  # bearer:expected python_third_parties_scout_apm
  scout_apm.api.Context.add("user_email", user.email)
  
  # bearer:expected python_third_parties_scout_apm
  scout_apm.api.instrument(
    "successful_login", 
    tags={ "user": current_user.name }, 
    tags={ "user": { "name": current_user.name, "email": current_user.email } }, 
    kind="Custom"
  )

# ok
def ok():
  scout_apm.api.Context.add("user_uuid", user.uuid)