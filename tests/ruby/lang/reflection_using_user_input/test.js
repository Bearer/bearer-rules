const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_not_unsafe", ({ expect }) => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_rails", ({ expect }) => {
    const testCase = "unsafe_rails.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_stdlib", ({ expect }) => {
    const testCase = "unsafe_stdlib.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})