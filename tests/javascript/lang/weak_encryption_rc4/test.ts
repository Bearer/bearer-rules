const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("rc4", async () => {
    const testCase = "rc4.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})