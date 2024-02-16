const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("blowfish_data", () => {
      const testCase = "blowfish_data.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("ok_not_a_password", () => {
      const testCase = "ok_not_a_password.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})