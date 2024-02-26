const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)


    test("cookie_file_traversal", () => {
      const testCase = "cookie_file_traversal.java"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })


    test("request_file_traversal", () => {
      const testCase = "request_file_traversal.java"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })


    test("request_file_traversal_sanitized", () => {
      const testCase = "request_file_traversal_sanitized.java"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })

})