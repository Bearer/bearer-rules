const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_not_a_password", ({ expect }) => {
    const testCase = "ok_not_a_password.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_dsa_data", ({ expect }) => {
    const testCase = "openssl_dsa_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})