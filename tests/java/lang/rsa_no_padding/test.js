const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("bad_no_padding", () => {
    const testCase = "bad_no_padding.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok", () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})