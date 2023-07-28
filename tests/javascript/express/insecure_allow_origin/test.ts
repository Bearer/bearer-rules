const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure_allow_origin", async () => {
    const testCase = "insecure_allow_origin.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_allow_origin_query", async () => {
    const testCase = "insecure_allow_origin_query.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})