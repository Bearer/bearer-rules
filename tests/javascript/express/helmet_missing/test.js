const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("index", ({ expect }) => {
    const testCase = "index.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure", ({ expect }) => {
    const testCase = "insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure", ({ expect }) => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure_part", ({ expect }) => {
    const testCase = "secure_part.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})