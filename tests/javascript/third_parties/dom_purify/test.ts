const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure", async () => {
    const testCase = "insecure"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_dependency", async () => {
    const testCase = "secure_dependency"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})