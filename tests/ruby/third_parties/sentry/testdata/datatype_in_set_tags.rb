# bearer:expected ruby_third_parties_sentry
Sentry.set_tags(email: user.email)

Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_tags(email: user.email)
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_tags(email: user.email)
end
