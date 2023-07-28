const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_as_user_id", async () => {
    const testCase = "datatype_as_user_id.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_nested_attribute", async () => {
    const testCase = "datatype_in_nested_attribute.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_only_ignored_datatypes", async () => {
    const testCase = "ok_only_ignored_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})