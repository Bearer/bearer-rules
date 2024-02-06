const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("cookie_missing_http_only", () => {
    const testCase = "main.go"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})