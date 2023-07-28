const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("openssl_dsa", async () => {
    const testCase = "openssl_dsa.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_dsa_data", async () => {
    const testCase = "openssl_dsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})