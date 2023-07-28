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
  
  test.concurrent("secure_app_disable", async () => {
    const testCase = "secure_app_disable.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_helmet", async () => {
    const testCase = "secure_helmet.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_helmet_import", async () => {
    const testCase = "secure_helmet_import.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})