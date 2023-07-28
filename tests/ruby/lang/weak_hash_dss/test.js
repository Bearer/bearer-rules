const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("openssl_dss1", ({ expect }) => {
    const testCase = "openssl_dss1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_dss1_data", ({ expect }) => {
    const testCase = "openssl_dss1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})