riskyCode(() => {
  try {
    // risky business
  } catch (e) {
// bearer:expected javascript_third_parties_bugsnag
    Bugsnag.notify(user.ip_address + " : " + e)
  }
})
