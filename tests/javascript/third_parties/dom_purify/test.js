const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("insecure", () => {
    const testCase = "insecure"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure", () => {
    const testCase = "secure"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure_dependency", () => {
    const testCase = "secure_dependency"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})