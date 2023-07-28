const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("crypto_md5", async () => {
    const testCase = "crypto_md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("cryptojs_md5", async () => {
    const testCase = "cryptojs_md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("md5", async () => {
    const testCase = "md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})