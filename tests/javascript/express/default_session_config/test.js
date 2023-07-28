const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("default_session_config", ({ expect }) => {
    const testCase = "default_session_config.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_session_configured", ({ expect }) => {
    const testCase = "ok_session_configured.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})