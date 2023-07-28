const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("httponly_disabled", () => {
    const testCase = "httponly_disabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok", () => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})