const { createNewInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("ok_no_path_traversal_vulnerability", () => {
    const testCase = "ok_no_path_traversal_vulnerability.js"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })

  test("path_traversal_vulnerability", () => {
    const testCase = "path_traversal_vulnerability.js"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })

  test("path_traversal", () => {
    const testCase = "path_traversal.ts"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: [],
    })
  })
})
