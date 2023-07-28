const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("digest_sha1", ({ expect }) => {
    const testCase = "digest_sha1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("digest_sha1_data", ({ expect }) => {
    const testCase = "digest_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_sha1", ({ expect }) => {
    const testCase = "openssl_sha1.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_sha1_data", ({ expect }) => {
    const testCase = "openssl_sha1_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})