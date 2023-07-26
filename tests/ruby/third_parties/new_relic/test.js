const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_add_custom_attributes", () => {
    const testCase = "datatype_in_add_custom_attributes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_add_custom_parameters", () => {
    const testCase = "datatype_in_add_custom_parameters.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_notice_error", () => {
    const testCase = "datatype_in_notice_error.rb"
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