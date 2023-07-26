const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("crypto_md5", () => {
    const testCase = "crypto_md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("cryptojs_md5", () => {
    const testCase = "cryptojs_md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("md5", () => {
    const testCase = "md5.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})