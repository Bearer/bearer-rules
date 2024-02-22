# bearer:expected ruby_third_parties_sentry
Sentry.set_extras(email: user.email)

Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_extras(email: user.email)
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_extras(email: user.email)
end
