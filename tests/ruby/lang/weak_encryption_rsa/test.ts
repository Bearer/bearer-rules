const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("openssl_rsa", async () => {
    const testCase = "openssl_rsa.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_rsa_data", async () => {
    const testCase = "openssl_rsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})