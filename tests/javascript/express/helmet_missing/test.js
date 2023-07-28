const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("index", () => {
    const testCase = "index.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure", () => {
    const testCase = "insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure", () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure_part", () => {
    const testCase = "secure_part.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})