Sentry.configureScope((scope) => {
// bearer:expected javascript_third_parties_sentry
  scope.setUser({ email: user.email })
})
