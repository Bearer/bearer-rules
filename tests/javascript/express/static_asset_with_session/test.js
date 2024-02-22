const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("ok", () => {
      const testCase = "ok.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("unsafe", () => {
      const testCase = "unsafe.js"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})