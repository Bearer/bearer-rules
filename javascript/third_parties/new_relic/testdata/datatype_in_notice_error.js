const newrelic = require("newrelic")

someFunc(() => {
  try {
    // something
  } catch (err){
    newrelic.noticeError(err, customer.ip_address)
  }
})