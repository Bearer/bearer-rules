const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure_assigment", ({ expect }) => {
    const testCase = "insecure_assigment.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_crypto", ({ expect }) => {
    const testCase = "insecure_crypto.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_object", ({ expect }) => {
    const testCase = "insecure_object.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure", ({ expect }) => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})