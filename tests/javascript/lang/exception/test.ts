const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("promise_reject", async () => {
    const testCase = "promise_reject.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("reject", async () => {
    const testCase = "reject.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("throw_custom_exception", async () => {
    const testCase = "throw_custom_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("throw_string", async () => {
    const testCase = "throw_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})