import bugsnag

# bearer:expected python_third_parties_bugsnag
bugsnag.notify(Exception("Bad user: " + user.email))

# bearer:expected python_third_parties_bugsnag
bugsnag.notify(Exception("Something broke!"),
  context="myContext",
  metadata={"special_info":{"user_uuid": user.uuid, "user_email": user.email}}
)

# bearer:expected python_third_parties_bugsnag
bugsnag.leave_breadcrumb("Something happened to " + user.email)

# ok 
bugsnag.leave_breadcrumb("Something happened to user " + user.uuid)


