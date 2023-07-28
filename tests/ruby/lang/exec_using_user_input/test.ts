const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_not_unsafe", async () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_shell", async () => {
    const testCase = "unsafe_shell.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_stdlib", async () => {
    const testCase = "unsafe_stdlib.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})