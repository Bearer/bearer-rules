const { createNewInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("missing_tls_validation", () => {
    const testCase = "app.js"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })

  test("missing_tls_validation_other", () => {
    const testCase = "other.js"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })
})
