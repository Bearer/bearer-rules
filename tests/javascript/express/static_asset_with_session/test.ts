const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok", async () => {
    const testCase = "ok.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe", async () => {
    const testCase = "unsafe.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})