scope = { person: { email: "someone@example.com" } }

# bearer:expected ruby_third_parties_rollbar
Rollbar.scoped(scope) do
  call
end
