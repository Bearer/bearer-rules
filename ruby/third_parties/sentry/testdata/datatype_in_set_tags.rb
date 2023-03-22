Sentry.set_tags(email: user.email)

Sentry.configure_scope do |scope|
  scope.set_tags(email: user.email)
end

Sentry.with_scope do |scope|
  scope.set_tags(email: user.email)
end
