const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("cookie_file_traversal", async () => {
    const testCase = "cookie_file_traversal.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("request_file_traversal", async () => {
    const testCase = "request_file_traversal.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("request_file_traversal_sanitized", async () => {
    const testCase = "request_file_traversal_sanitized.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})