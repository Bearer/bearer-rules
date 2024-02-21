# bearer:expected ruby_third_parties_sentry
Sentry.set_context('email', { email: user.email })

Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_context('email', { email: user.email })
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_context('email', { email: user.email })
end
