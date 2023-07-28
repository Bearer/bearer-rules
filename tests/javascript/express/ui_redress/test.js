const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_no_ui_redress", ({ expect }) => {
    const testCase = "ok_no_ui_redress.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ui_redress_vulnerability", ({ expect }) => {
    const testCase = "ui_redress_vulnerability.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})