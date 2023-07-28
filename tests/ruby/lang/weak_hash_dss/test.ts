const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("openssl_dss1", async () => {
    const testCase = "openssl_dss1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_dss1_data", async () => {
    const testCase = "openssl_dss1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})