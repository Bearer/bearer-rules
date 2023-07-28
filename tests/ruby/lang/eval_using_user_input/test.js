const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_not_unsafe", ({ expect }) => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_event", ({ expect }) => {
    const testCase = "unsafe_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_params", ({ expect }) => {
    const testCase = "unsafe_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe_request", ({ expect }) => {
    const testCase = "unsafe_request.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})