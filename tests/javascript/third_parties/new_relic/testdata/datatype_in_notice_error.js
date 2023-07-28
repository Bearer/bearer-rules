const newrelic = require("newrelic")

someFunc(({ expect }) =>
  try {
    // something
  } catch (err){
    newrelic.noticeError(err, customer.ip_address)
  }
})