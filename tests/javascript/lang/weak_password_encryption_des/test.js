const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("des_password", ({ expect }) => {
    const testCase = "des_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_not_a_password", ({ expect }) => {
    const testCase = "ok_not_a_password.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})