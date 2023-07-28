const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("hardcoded_secret_in_jwt", async () => {
    const testCase = "hardcoded_secret_in_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("hardcoded_secret_in_session", async () => {
    const testCase = "hardcoded_secret_in_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_hardcoded_secrets", async () => {
    const testCase = "ok_no_hardcoded_secrets.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})