const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("injected_params", () => {
    const testCase = "injected_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_sanitized", () => {
    const testCase = "ok_sanitized.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_using_bind", () => {
    const testCase = "ok_using_bind.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})