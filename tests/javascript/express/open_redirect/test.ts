const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_no_open_redirect", async () => {
    const testCase = "ok_no_open_redirect.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("open_redirect", async () => {
    const testCase = "open_redirect.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})