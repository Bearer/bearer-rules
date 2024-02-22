# bearer:expected ruby_third_parties_sentry
Sentry.capture_message("test: #{user.email}")
# bearer:expected ruby_third_parties_sentry
Sentry.capture_message("test", extra: { email: user.email })
# bearer:expected ruby_third_parties_sentry
Sentry.capture_message("test", tags: { email: user.email })
# bearer:expected ruby_third_parties_sentry
Sentry.capture_message("test", user: { email: user.email })
