const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("bad", async () => {
    const testCase = "bad.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("bad_http_only", async () => {
    const testCase = "bad_http_only.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok", async () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})