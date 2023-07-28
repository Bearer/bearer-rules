const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("digest_md5_data", ({ expect }) => {
    const testCase = "digest_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_not_a_password", ({ expect }) => {
    const testCase = "ok_not_a_password.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_md5_data", ({ expect }) => {
    const testCase = "openssl_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})