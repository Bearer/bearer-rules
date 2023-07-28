const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_password_length", () => {
    const testCase = "ok_password_length.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("password_too_short", () => {
    const testCase = "password_too_short.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})