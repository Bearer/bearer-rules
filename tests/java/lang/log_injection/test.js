const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("log_injection", () => {
    const testCase = "log_injection.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})