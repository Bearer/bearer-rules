// bearer:expected javascript_third_parties_sentry
Sentry.captureEvent({
  message: "user successfully logged in " + current_user.email,
  stacktrace: [
    // ...
  ],
})
