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
  

  test("secure_app_disable", () => {
    const testCase = "secure_app_disable.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure_helmet", () => {
    const testCase = "secure_helmet.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure_helmet_import", () => {
    const testCase = "secure_helmet_import.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})