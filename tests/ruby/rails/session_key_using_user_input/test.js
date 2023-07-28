const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_no_user_input", ({ expect }) => {
    const testCase = "ok_no_user_input.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe", ({ expect }) => {
    const testCase = "unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})