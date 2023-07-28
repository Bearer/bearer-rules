const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("promise_reject", ({ expect }) => {
    const testCase = "promise_reject.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("reject", ({ expect }) => {
    const testCase = "reject.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("throw_custom_exception", ({ expect }) => {
    const testCase = "throw_custom_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("throw_string", ({ expect }) => {
    const testCase = "throw_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})