const newrelic = require('newrelic')

// bearer:expected javascript_third_parties_new_relic
newrelic.setPageViewName(customer.bank_account_number, "$host")
