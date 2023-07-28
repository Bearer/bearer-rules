const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_ssl_verify_peer_mode", async () => {
    const testCase = "ok_ssl_verify_peer_mode.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("verify_none", async () => {
    const testCase = "verify_none.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("verify_none_ssl_var", async () => {
    const testCase = "verify_none_ssl_var.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})