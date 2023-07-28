const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("not_session_leak", async () => {
    const testCase = "not_session_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("session_leak", async () => {
    const testCase = "session_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})