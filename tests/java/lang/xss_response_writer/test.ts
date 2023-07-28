const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok", async () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("vulnerable", async () => {
    const testCase = "vulnerable.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})