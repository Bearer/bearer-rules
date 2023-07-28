const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("no_datatypes", async () => {
    const testCase = "no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ssl_disabled_commented_out", async () => {
    const testCase = "ok_ssl_disabled_commented_out.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ssl_enabled", async () => {
    const testCase = "ok_ssl_enabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ssl_disabled", async () => {
    const testCase = "ssl_disabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})