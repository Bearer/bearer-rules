const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("browser_insecure", async () => {
    const testCase = "browser_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("browser_secure", async () => {
    const testCase = "browser_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})