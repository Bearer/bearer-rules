const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_build_notice", ({ expect }) => {
    const testCase = "datatype_in_build_notice.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_custom_notice", ({ expect }) => {
    const testCase = "datatype_in_custom_notice.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_extended_notify_methods", ({ expect }) => {
    const testCase = "datatype_in_extended_notify_methods.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_merge_context", ({ expect }) => {
    const testCase = "datatype_in_merge_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_notify", ({ expect }) => {
    const testCase = "datatype_in_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_rescue_block", ({ expect }) => {
    const testCase = "datatype_in_rescue_block.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_ignored_datatypes", ({ expect }) => {
    const testCase = "ok_ignored_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes", ({ expect }) => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})