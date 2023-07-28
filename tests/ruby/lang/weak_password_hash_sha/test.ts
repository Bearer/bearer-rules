const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("digest_sha1_data", async () => {
    const testCase = "digest_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_not_a_password", async () => {
    const testCase = "ok_not_a_password.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_sha1_data", async () => {
    const testCase = "openssl_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})