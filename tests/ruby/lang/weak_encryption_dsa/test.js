const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("openssl_dsa", ({ expect }) => {
    const testCase = "openssl_dsa.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_dsa_data", ({ expect }) => {
    const testCase = "openssl_dsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})