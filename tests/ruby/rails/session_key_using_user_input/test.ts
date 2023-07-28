const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_no_user_input", async () => {
    const testCase = "ok_no_user_input.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe", async () => {
    const testCase = "unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})