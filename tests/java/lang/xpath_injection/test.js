const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("xpath_injection", () => {
    const testCase = "xpath_injection.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})