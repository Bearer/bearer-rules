const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("ok_not_unsafe", () => {
      const testCase = "ok_not_unsafe.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_curb", () => {
      const testCase = "unsafe_curb.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_excon", () => {
      const testCase = "unsafe_excon.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_get", () => {
      const testCase = "unsafe_get.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_net_http", () => {
      const testCase = "unsafe_net_http.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_open", () => {
      const testCase = "unsafe_open.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe_post", () => {
      const testCase = "unsafe_post.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})