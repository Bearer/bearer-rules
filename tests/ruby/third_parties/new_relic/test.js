const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_add_custom_attributes", ({ expect }) => {
    const testCase = "datatype_in_add_custom_attributes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_add_custom_parameters", ({ expect }) => {
    const testCase = "datatype_in_add_custom_parameters.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_notice_error", ({ expect }) => {
    const testCase = "datatype_in_notice_error.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_datatype_ignored", ({ expect }) => {
    const testCase = "ok_datatype_ignored.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatype", ({ expect }) => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})