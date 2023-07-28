const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_no_os_command_injection", async () => {
    const testCase = "ok_no_os_command_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("os_command_injection", async () => {
    const testCase = "os_command_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})