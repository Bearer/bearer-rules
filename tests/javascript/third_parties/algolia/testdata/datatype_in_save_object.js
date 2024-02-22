const algoliasearch = require("algoliasearch")
const myAlgolia = algoliasearch("123", "123")

const index = myAlgolia.initIndex("test_index")

// saveObject
const userObj = { user_id: user.ip_address }
// bearer:expected javascript_third_parties_algolia
index
  .saveObject(userObj, { autoGenerateObjectIDIfNotExist: true })
  .then(console.log("obj saved"))

// bearer:expected javascript_third_parties_algolia
index.saveObjects([{ email: user.email }])




