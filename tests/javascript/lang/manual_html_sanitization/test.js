const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("safe", () => {
    const testCase = "safe.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe", () => {
    const testCase = "unsafe.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})