const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure_controller", async () => {
    const testCase = "insecure_controller.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_controller", async () => {
    const testCase = "secure_controller.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})