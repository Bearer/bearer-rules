const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_breadcrumb", () => {
    const testCase = "datatype_in_breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_capture_message", () => {
    const testCase = "datatype_in_capture_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_init", () => {
    const testCase = "datatype_in_init.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_context", () => {
    const testCase = "datatype_in_set_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_extra", () => {
    const testCase = "datatype_in_set_extra.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_extras", () => {
    const testCase = "datatype_in_set_extras.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_tag", () => {
    const testCase = "datatype_in_set_tag.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_tags", () => {
    const testCase = "datatype_in_set_tags.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_user", () => {
    const testCase = "datatype_in_set_user.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_datatype_ignored", () => {
    const testCase = "ok_datatype_ignored.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatype", () => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})