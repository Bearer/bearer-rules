const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_verification_enabled", () => {
    const testCase = "ok_verification_enabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("verification_disabled", () => {
    const testCase = "verification_disabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})