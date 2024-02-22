const newrelic = require("newrelic")

someFunc(() => {
  try {
    // something
  } catch (err){
// bearer:expected javascript_third_parties_new_relic
    newrelic.noticeError(err, customer.ip_address)
  }
})