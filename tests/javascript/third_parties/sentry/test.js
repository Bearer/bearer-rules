const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("javascript_add_breadcrumb", () => {
      const testCase = "javascript_add_breadcrumb.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_capture_event", () => {
      const testCase = "javascript_capture_event.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_capture_exception", () => {
      const testCase = "javascript_capture_exception.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_capture_message", () => {
      const testCase = "javascript_capture_message.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_configure_scope_set_extra", () => {
      const testCase = "javascript_configure_scope_set_extra.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_configure_scope_set_tag", () => {
      const testCase = "javascript_configure_scope_set_tag.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("javascript_configure_scope_set_user", () => {
      const testCase = "javascript_configure_scope_set_user.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})