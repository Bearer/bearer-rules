const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_not_unsafe", () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe", () => {
    const testCase = "unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})