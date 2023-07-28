const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_app_use", ({ expect }) => {
    const testCase = "ok_app_use.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("serve_index_in_app_use", ({ expect }) => {
    const testCase = "serve_index_in_app_use.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})