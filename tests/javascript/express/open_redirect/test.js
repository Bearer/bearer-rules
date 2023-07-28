const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_no_open_redirect", ({ expect }) => {
    const testCase = "ok_no_open_redirect.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("open_redirect", ({ expect }) => {
    const testCase = "open_redirect.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})