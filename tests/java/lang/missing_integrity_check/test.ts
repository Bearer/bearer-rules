const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("missing_integrity_check", async () => {
    const testCase = "missing_integrity_check.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok", async () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})