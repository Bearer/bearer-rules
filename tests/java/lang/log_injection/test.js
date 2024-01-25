const { createInvoker, createNewInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("log_injection", () => {
    const testCase = "log_injection.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })

  // new style tests
  const invokeV2 = createNewInvoker(ruleId, ruleFile, testBase)

  test("log_injection_v2", () => {
    const testCase = "main.java"

    const results = invokeV2(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

})