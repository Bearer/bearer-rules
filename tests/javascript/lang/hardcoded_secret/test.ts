const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure_assigment", async () => {
    const testCase = "insecure_assigment.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_crypto", async () => {
    const testCase = "insecure_crypto.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_object", async () => {
    const testCase = "insecure_object.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})