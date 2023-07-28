const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("rc4_data", async () => {
    const testCase = "rc4_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("rc4_encrypt", async () => {
    const testCase = "rc4_encrypt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})