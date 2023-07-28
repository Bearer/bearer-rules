const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_cohort", ({ expect }) => {
    const testCase = "datatype_in_cohort.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_custom_dimension", ({ expect }) => {
    const testCase = "datatype_in_custom_dimension.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_event_data", ({ expect }) => {
    const testCase = "datatype_in_event_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_transaction_data", ({ expect }) => {
    const testCase = "datatype_in_transaction_data.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_user_classes", ({ expect }) => {
    const testCase = "datatype_in_user_classes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_ignored_datatype", ({ expect }) => {
    const testCase = "ok_ignored_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatype", ({ expect }) => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})