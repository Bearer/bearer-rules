const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("digest_md5", ({ expect }) => {
    const testCase = "digest_md5.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("digest_md5_data", ({ expect }) => {
    const testCase = "digest_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_md5", ({ expect }) => {
    const testCase = "openssl_md5.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("openssl_md5_data", ({ expect }) => {
    const testCase = "openssl_md5_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})