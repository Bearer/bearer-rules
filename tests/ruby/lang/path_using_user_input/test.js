const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_not_unsafe", () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_event", () => {
    const testCase = "unsafe_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_params", () => {
    const testCase = "unsafe_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_rails", () => {
    const testCase = "unsafe_rails.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_request", () => {
    const testCase = "unsafe_request.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_shell", () => {
    const testCase = "unsafe_shell.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})