# sending data type to Sentry.set_user
# https://docs.sentry.io/platforms/ruby/guides/rails/enriching-events/identify-user/
# bearer:expected ruby_third_parties_sentry
Sentry.set_user(email: user.email)

Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_user(email: user.email)
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_user(email: user.email)
end
