const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("observable_timing", () => {
    const testCase = "main.java"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: []
    })
  })
})