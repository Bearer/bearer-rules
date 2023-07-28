const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_password_length", async () => {
    const testCase = "ok_password_length.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("password_too_short", async () => {
    const testCase = "password_too_short.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})