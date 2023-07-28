const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("blowfish_data", () => {
    const testCase = "blowfish_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_not_a_password", () => {
    const testCase = "ok_not_a_password.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})