const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("browser_insecure", ({ expect }) => {
    const testCase = "browser_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("browser_secure", ({ expect }) => {
    const testCase = "browser_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})