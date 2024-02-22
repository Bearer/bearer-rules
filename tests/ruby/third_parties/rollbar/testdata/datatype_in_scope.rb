# bearer:expected ruby_third_parties_rollbar
Rollbar.scope!({ user: { email: "someone@example.com" }})

user = { email: "someone@example.com" }

# bearer:expected ruby_third_parties_rollbar
notifier = Rollbar.scope(user)

# bearer:expected ruby_third_parties_rollbar
notifier.scope(user: { first_name: "someone" })
