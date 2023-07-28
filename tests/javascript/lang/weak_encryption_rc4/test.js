const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("rc4", () => {
    const testCase = "rc4.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})