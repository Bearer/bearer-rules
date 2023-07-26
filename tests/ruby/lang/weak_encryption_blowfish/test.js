const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("blowfish", () => {
    const testCase = "blowfish.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("blowfish_data", () => {
    const testCase = "blowfish_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})