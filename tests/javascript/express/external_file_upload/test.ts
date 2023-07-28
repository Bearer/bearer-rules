const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_send_file", async () => {
    const testCase = "ok_send_file.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("send_file_with_external_input", async () => {
    const testCase = "send_file_with_external_input.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})