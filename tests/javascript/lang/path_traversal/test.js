const { createNewInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("path_traversal", () => {
    const testCase = "path_traversal.ts"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })
})
