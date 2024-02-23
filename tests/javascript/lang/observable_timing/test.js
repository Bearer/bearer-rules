const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("observable_timing", () => {
    const testCase = "app.js"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})