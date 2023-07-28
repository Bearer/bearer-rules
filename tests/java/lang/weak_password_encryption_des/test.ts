const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("des", async () => {
    const testCase = "des.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_not_a_password", async () => {
    const testCase = "ok_not_a_password.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})