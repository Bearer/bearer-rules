const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("blowfish", async () => {
    const testCase = "blowfish.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("blowfish_data", async () => {
    const testCase = "blowfish_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})