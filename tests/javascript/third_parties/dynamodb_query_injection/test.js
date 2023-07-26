const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("dynamodb_query_injection", () => {
    const testCase = "dynamodb_query_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_injection", () => {
    const testCase = "ok_no_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})