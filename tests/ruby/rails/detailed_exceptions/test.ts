const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("bad", async () => {
    const testCase = "bad.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("development", async () => {
    const testCase = "development.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok", async () => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})