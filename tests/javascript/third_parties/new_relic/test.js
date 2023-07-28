const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_interaction_set_attribute", ({ expect }) => {
    const testCase = "datatype_in_interaction_set_attribute.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_notice_error", ({ expect }) => {
    const testCase = "datatype_in_notice_error.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_set_custom_attribute", ({ expect }) => {
    const testCase = "datatype_in_set_custom_attribute.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_set_page_view_name", ({ expect }) => {
    const testCase = "datatype_in_set_page_view_name.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_ignored_datatypes_only", ({ expect }) => {
    const testCase = "ok_ignored_datatypes_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes", ({ expect }) => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})