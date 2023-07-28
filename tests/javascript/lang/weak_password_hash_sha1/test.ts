const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_not_a_password", async () => {
    const testCase = "ok_not_a_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("sha1_password", async () => {
    const testCase = "sha1_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})