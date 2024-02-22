const algoliasearch = require('algoliasearch')
const myAlgolia = algoliasearch("123", "123")

// bearer:expected javascript_third_parties_algolia
const index = myAlgolia.initIndex(company.bank_account_number)

