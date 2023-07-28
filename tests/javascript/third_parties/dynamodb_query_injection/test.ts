const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("dynamodb_query_injection", async () => {
    const testCase = "dynamodb_query_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_injection", async () => {
    const testCase = "ok_no_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})