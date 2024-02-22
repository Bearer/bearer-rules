// bearer:expected javascript_third_parties_sentry
Sentry.captureException(
  new Error(`user ${current_user.email} couldn't log in!`)
)
