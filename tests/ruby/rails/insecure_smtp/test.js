const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok_ssl_verify_peer_mode", ({ expect }) => {
    const testCase = "ok_ssl_verify_peer_mode.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("verify_none", ({ expect }) => {
    const testCase = "verify_none.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("verify_none_ssl_var", ({ expect }) => {
    const testCase = "verify_none_ssl_var.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})