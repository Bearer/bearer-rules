const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("bad", async () => {
    const testCase = "bad.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_secure_random", async () => {
    const testCase = "ok_secure_random.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})