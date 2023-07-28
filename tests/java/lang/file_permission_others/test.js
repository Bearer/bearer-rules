const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok", ({ expect }) => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("others", ({ expect }) => {
    const testCase = "others.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})