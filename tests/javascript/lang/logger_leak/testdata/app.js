// Use bearer:expected javascript_lang_logger_leak to flag expected findings
const ctx = {
  user: {
    email: "foo@example.com",
  },
}

logger.child(ctx).info(user.name)
logger.child(ctx)
console.log(user.name)
console.log("user email is", user.email)
// bearer:expected javascript_lang_logger_leak
console.log(user.name ? ok : ok)
logger.info(user.email)
logger.error("something went wrong")

const user = { email: "foo@example.com" }

const data = getResults()
// bearer:expected javascript_lang_logger_leak
logger.info(`this is a leak ${data}`)
