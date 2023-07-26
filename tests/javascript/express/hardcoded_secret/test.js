const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("hardcoded_secret_in_jwt", () => {
    const testCase = "hardcoded_secret_in_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("hardcoded_secret_in_session", () => {
    const testCase = "hardcoded_secret_in_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_hardcoded_secrets", () => {
    const testCase = "ok_no_hardcoded_secrets.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})