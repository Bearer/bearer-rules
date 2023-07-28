const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("digest_sha1", async () => {
    const testCase = "digest_sha1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("digest_sha1_data", async () => {
    const testCase = "digest_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_sha1", async () => {
    const testCase = "openssl_sha1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_sha1_data", async () => {
    const testCase = "openssl_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})