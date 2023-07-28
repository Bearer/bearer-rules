const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("injected_params", async () => {
    const testCase = "injected_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_sanitized", async () => {
    const testCase = "ok_sanitized.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_using_bind", async () => {
    const testCase = "ok_using_bind.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})