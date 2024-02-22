# bearer:expected ruby_third_parties_rollbar
Rollbar.critical("oops #{user.email}")
# bearer:expected ruby_third_parties_rollbar
Rollbar.critical(e, "oops #{user.email}")
# bearer:expected ruby_third_parties_rollbar
Rollbar.critical(e, user: { email: "someone@example.com" })
# bearer:expected ruby_third_parties_rollbar
Rollbar.critical(e, { user: { first_name: "someone" } })

# bearer:expected ruby_third_parties_rollbar
Rollbar.error("oops #{user.email}")

# bearer:expected ruby_third_parties_rollbar
Rollbar.debug("oops #{user.email}")

# bearer:expected ruby_third_parties_rollbar
Rollbar.info("oops #{user.email}")

# bearer:expected ruby_third_parties_rollbar
Rollbar.warning("oops #{user.email}")
