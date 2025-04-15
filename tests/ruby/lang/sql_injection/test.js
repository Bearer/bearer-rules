const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("sql_injection", () => {
    const testCase = "main.rb"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: []
    })
  })
})