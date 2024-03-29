const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  
    test("datatype_in_cohort", () => {
      const testCase = "datatype_in_cohort.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("datatype_in_custom_dimension", () => {
      const testCase = "datatype_in_custom_dimension.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("datatype_in_event_data", () => {
      const testCase = "datatype_in_event_data.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("datatype_in_transaction_data", () => {
      const testCase = "datatype_in_transaction_data.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("datatype_in_user_classes", () => {
      const testCase = "datatype_in_user_classes.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("ok_ignored_datatype", () => {
      const testCase = "ok_ignored_datatype.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  

    test("ok_no_datatype", () => {
      const testCase = "ok_no_datatype.rb"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  
})