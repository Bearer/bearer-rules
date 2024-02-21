# bearer:expected ruby_third_parties_rollbar
Rollbar.log("error", "oops #{user.email}")
# bearer:expected ruby_third_parties_rollbar
Rollbar.log("error", "oops", user: { email: "someone@example.com" })
# bearer:expected ruby_third_parties_rollbar
Rollbar.log("error", "oops", { user: { first_name: "someone" } })
