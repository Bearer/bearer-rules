const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("default_cookie_session_config", async () => {
    const testCase = "default_cookie_session_config.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("default_express_session_cookie_config", async () => {
    const testCase = "default_express_session_cookie_config.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_cookie_configured", async () => {
    const testCase = "ok_cookie_configured.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})