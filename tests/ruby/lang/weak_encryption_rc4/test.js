const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("rc4_data", () => {
      const testCase = "rc4_data.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("rc4_encrypt", () => {
      const testCase = "rc4_encrypt.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})