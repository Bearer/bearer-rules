const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure", async () => {
    const testCase = "insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_jose_jwt", async () => {
    const testCase = "insecure_jose_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_jwt", async () => {
    const testCase = "insecure_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})