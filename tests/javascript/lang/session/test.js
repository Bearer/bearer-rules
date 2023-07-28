const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("not_session_leak", ({ expect }) => {
    const testCase = "not_session_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("session_leak", ({ expect }) => {
    const testCase = "session_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})