user = { first_name: "foo" }
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.notice_error(exception, { custom_params: user })
# bearer:expected ruby_third_parties_new_relic
NewRelic::Agent.notice_error(exception, expected: true, custom_params: { last_name: "foo" }, metric: "test")
