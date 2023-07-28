const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_not_a_password", ({ expect }) => {
    const testCase = "ok_not_a_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sha1_password", ({ expect }) => {
    const testCase = "sha1_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})