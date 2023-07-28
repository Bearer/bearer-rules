const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("index", async () => {
    const testCase = "index.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure", async () => {
    const testCase = "insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_part", async () => {
    const testCase = "secure_part.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})