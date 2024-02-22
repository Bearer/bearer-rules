// Use bearer:expected javascript_lang_logger_leak to flag expected findings
const ctx = {
  user: {
    email: "foo@example.com",
  },
}

const knownData = "foo"

logger.child(ctx).info(user.name)
logger.child(ctx)
console.log(user.name)
console.log("user email is", user.email)
// bearer:expected javascript_lang_logger_leak
console.log(user.name ? ok : ok)
logger.info(user.email)
logger.error("something went wrong")
// bearer:expected javascript_lang_logger_leak
logger.error("something went wrong with unknown data" + unknownData)
logger.error("something went wrong with known data" + knownData)

// bearer:expected javascript_lang_logger_leak
console.log("something went wrong", unknownData)

const user = { email: "foo@example.com" }

const unknownResults = getResults()
// bearer:expected javascript_lang_logger_leak
logger.info(`this is a leak ${unknownResults}`)
