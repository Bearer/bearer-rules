const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("default_cookie_session_config", () => {
    const testCase = "default_cookie_session_config.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("default_express_session_cookie_config", () => {
    const testCase = "default_express_session_cookie_config.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_cookie_configured", () => {
    const testCase = "ok_cookie_configured.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})