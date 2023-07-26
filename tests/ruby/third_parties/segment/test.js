const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_as_user_id", () => {
    const testCase = "datatype_as_user_id.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_nested_attribute", () => {
    const testCase = "datatype_in_nested_attribute.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_only_ignored_datatypes", () => {
    const testCase = "ok_only_ignored_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})