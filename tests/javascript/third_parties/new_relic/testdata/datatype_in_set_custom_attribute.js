const newrelic = require("newrelic")

// bearer:expected javascript_third_parties_new_relic
newrelic.setCustomAttribute("user-id", customer.email)
