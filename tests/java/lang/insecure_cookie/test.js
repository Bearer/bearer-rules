const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("bad", ({ expect }) => {
    const testCase = "bad.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("bad_http_only", ({ expect }) => {
    const testCase = "bad_http_only.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok", ({ expect }) => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})