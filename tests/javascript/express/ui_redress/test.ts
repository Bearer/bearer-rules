const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_no_ui_redress", async () => {
    const testCase = "ok_no_ui_redress.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ui_redress_vulnerability", async () => {
    const testCase = "ui_redress_vulnerability.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})