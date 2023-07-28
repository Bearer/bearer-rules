const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure_controller", ({ expect }) => {
    const testCase = "insecure_controller.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure_controller", ({ expect }) => {
    const testCase = "secure_controller.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})