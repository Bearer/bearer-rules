const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_no_os_command_injection", () => {
    const testCase = "ok_no_os_command_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("os_command_injection", () => {
    const testCase = "os_command_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})