# bearer:expected ruby_third_parties_sentry
Sentry::Breadcrumb.new(
  category: "auth",
  message: "Authenticated user #{user.email}",
  level: "info"
)
