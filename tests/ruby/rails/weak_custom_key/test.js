const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok", ({ expect }) => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("weak_key", ({ expect }) => {
    const testCase = "weak_key.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})