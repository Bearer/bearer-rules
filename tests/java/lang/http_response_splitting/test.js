const { createInvoker, createNewInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)


  test("bad", () => {
    const testCase = "bad.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })


  test("ok", () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })

  // new test cases
  const invokeV2 = createNewInvoker(ruleId, ruleFile, testBase)
  test("http_response_splitting", () => {
    const testCase = "main.java"

    const results = invokeV2(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})