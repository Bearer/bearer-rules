const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("argon2i", async () => {
    const testCase = "argon2i.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_encryption", async () => {
    const testCase = "ok_encryption.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_not_a_password", async () => {
    const testCase = "ok_not_a_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})