const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("log4j_secure", () => {
    const testCase = "secure/"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("log4j_insecure", () => {
    const testCase = "insecure/"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})