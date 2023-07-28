const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("secure", ({ expect }) => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sha1", ({ expect }) => {
    const testCase = "sha1.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})