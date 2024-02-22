Sentry.configureScope((scope) => {
// bearer:expected javascript_third_parties_sentry
  scope.setTag("user_email", user.email)
})
