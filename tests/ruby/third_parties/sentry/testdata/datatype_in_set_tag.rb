Sentry.configure_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_tag(:email, user.email)
end

Sentry.with_scope do |scope|
# bearer:expected ruby_third_parties_sentry
  scope.set_tag(:email, user.email)
end
