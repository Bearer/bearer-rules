const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("no_datatypes", () => {
    const testCase = "no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ssl_disabled_commented_out", () => {
    const testCase = "ok_ssl_disabled_commented_out.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ssl_enabled", () => {
    const testCase = "ok_ssl_enabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ssl_disabled", () => {
    const testCase = "ssl_disabled.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})