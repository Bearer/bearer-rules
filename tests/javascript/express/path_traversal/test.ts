const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_no_path_traversal_vulnerability", async () => {
    const testCase = "ok_no_path_traversal_vulnerability.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("path_traversal_vulnerability", async () => {
    const testCase = "path_traversal_vulnerability.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})