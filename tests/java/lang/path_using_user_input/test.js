const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("cookie_file_traversal", () => {
    const testCase = "cookie_file_traversal.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("request_file_traversal", () => {
    const testCase = "request_file_traversal.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("request_file_traversal_sanitized", () => {
    const testCase = "request_file_traversal_sanitized.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})