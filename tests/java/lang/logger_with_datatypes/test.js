const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("simple", () => {
    const testCase = "simple.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})