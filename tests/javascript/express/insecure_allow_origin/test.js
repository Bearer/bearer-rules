const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("insecure_allow_origin", () => {
    const testCase = "insecure_allow_origin.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure_allow_origin_query", () => {
    const testCase = "insecure_allow_origin_query.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure", () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})