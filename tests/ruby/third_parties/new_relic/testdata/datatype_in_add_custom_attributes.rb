user = { email: "user@example.com" }
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.add_custom_attributes(user)
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.add_custom_attributes(a: "test", user: { email: "user@example.com" }, other: 42)
