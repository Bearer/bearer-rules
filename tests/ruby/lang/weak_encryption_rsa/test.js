const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("openssl_rsa", ({ expect }) => {
    const testCase = "openssl_rsa.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_rsa_data", ({ expect }) => {
    const testCase = "openssl_rsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure", ({ expect }) => {
    const testCase = "secure.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})