// tests for javascript_shared_common_datatype

const user = { email: "foo@example.com" }

logger.info(user.uuid)
logger.info(user.uuid())
logger.info(user["uuid"])
const { uuid } = user
logger.info(uuid)
