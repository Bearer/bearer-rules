const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("bad", ({ expect }) => {
    const testCase = "bad.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_secure_random", ({ expect }) => {
    const testCase = "ok_secure_random.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})