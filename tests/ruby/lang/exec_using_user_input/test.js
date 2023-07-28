const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_not_unsafe", ({ expect }) => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_shell", ({ expect }) => {
    const testCase = "unsafe_shell.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_stdlib", ({ expect }) => {
    const testCase = "unsafe_stdlib.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})