Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_extra(:email, user.email)
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_extra(:email, user.email)
end
