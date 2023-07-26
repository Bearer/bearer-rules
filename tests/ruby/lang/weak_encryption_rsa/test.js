const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("openssl_rsa", () => {
    const testCase = "openssl_rsa.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("openssl_rsa_data", () => {
    const testCase = "openssl_rsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure", () => {
    const testCase = "secure.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})