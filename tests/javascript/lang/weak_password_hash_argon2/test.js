const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("argon2i", ({ expect }) => {
    const testCase = "argon2i.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_encryption", ({ expect }) => {
    const testCase = "ok_encryption.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_not_a_password", ({ expect }) => {
    const testCase = "ok_not_a_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})