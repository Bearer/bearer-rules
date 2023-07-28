const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("no_xss", async () => {
    const testCase = "no_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("res_send_xss", async () => {
    const testCase = "res_send_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("res_write_xss", async () => {
    const testCase = "res_write_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("user_input_types", async () => {
    const testCase = "user_input_types.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})