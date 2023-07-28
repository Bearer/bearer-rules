const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_app_use", async () => {
    const testCase = "ok_app_use.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("serve_index_in_app_use", async () => {
    const testCase = "serve_index_in_app_use.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})