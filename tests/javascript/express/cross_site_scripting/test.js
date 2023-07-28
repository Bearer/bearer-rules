const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("no_xss", ({ expect }) => {
    const testCase = "no_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("res_send_xss", ({ expect }) => {
    const testCase = "res_send_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("res_write_xss", ({ expect }) => {
    const testCase = "res_write_xss.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("user_input_types", ({ expect }) => {
    const testCase = "user_input_types.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})