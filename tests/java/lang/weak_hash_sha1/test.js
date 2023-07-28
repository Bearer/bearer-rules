const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_sha_256", ({ expect }) => {
    const testCase = "ok_sha_256.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sha1_hash", ({ expect }) => {
    const testCase = "sha1_hash.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})