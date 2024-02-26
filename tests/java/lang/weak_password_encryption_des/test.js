const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)


    test("des", () => {
      const testCase = "des.java"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      // FIXME: bug in expected findings
      expect(results.Extra).toEqual(["java_lang_weak_password_encryption_des:8"])
    })


    test("ok_not_a_password", () => {
      const testCase = "ok_not_a_password.java"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })

})