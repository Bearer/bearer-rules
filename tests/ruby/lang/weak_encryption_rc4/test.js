const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("rc4_data", () => {
    const testCase = "rc4_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("rc4_encrypt", () => {
    const testCase = "rc4_encrypt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})