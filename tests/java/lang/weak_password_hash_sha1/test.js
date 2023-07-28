const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_not_a_password", () => {
    const testCase = "ok_not_a_password.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("sha1_hash", () => {
    const testCase = "sha1_hash.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})