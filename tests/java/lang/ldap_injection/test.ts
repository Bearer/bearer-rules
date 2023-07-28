const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ldap_injection", async () => {
    const testCase = "ldap_injection.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})