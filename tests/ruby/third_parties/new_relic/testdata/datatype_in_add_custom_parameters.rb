user = { address: "foo" }
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.add_custom_parameters(user)
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.add_custom_parameters(user: { email: "user@example.com" })
