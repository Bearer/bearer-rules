const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("permissive_cookie_config", () => {
    const testCase = "main.java"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})