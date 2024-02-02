const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("world_readable_mode", () => {
    const testCase = "main.java"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})