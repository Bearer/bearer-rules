const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_sha_256", async () => {
    const testCase = "ok_sha_256.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("sha1_hash", async () => {
    const testCase = "sha1_hash.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})