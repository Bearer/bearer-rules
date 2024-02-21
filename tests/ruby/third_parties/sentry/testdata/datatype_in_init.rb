Sentry.init do |config|
  config.before_breadcrumb = lambda do |breadcrumb, hint|
# bearer:expected ruby_third_parties_sentry
    breadcrumb.message = "Authenticated user #{current_user.email}"
    breadcrumb
  end
end
