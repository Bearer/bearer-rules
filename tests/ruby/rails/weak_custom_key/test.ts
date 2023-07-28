const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok", async () => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("weak_key", async () => {
    const testCase = "weak_key.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})