const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure", ({ expect }) => {
    const testCase = "insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_jose_jwt", ({ expect }) => {
    const testCase = "insecure_jose_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_jwt", ({ expect }) => {
    const testCase = "insecure_jwt.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure", ({ expect }) => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})