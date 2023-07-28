const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure", ({ expect }) => {
    const testCase = "insecure.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok", ({ expect }) => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})