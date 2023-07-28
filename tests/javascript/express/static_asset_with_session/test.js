const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("ok", ({ expect }) => {
    const testCase = "ok.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("unsafe", ({ expect }) => {
    const testCase = "unsafe.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})