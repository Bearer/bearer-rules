const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_not_unsafe", async () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_event", async () => {
    const testCase = "unsafe_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_params", async () => {
    const testCase = "unsafe_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_request", async () => {
    const testCase = "unsafe_request.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})