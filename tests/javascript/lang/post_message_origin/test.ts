const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("bad", async () => {
    const testCase = "bad.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok", async () => {
    const testCase = "ok.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})