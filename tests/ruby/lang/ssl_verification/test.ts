const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_verification_enabled", async () => {
    const testCase = "ok_verification_enabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("verification_disabled", async () => {
    const testCase = "verification_disabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})