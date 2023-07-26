const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_build_notice", () => {
    const testCase = "datatype_in_build_notice.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_custom_notice", () => {
    const testCase = "datatype_in_custom_notice.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_extended_notify_methods", () => {
    const testCase = "datatype_in_extended_notify_methods.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_merge_context", () => {
    const testCase = "datatype_in_merge_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_notify", () => {
    const testCase = "datatype_in_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_rescue_block", () => {
    const testCase = "datatype_in_rescue_block.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ignored_datatypes", () => {
    const testCase = "ok_ignored_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})