const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("digest_md5", async () => {
    const testCase = "digest_md5.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("digest_md5_data", async () => {
    const testCase = "digest_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_md5", async () => {
    const testCase = "openssl_md5.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("openssl_md5_data", async () => {
    const testCase = "openssl_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})