const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_config", () => {
    const testCase = "datatype_in_config.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_job_message", () => {
    const testCase = "datatype_in_job_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_metadata", () => {
    const testCase = "datatype_in_metadata.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_params_entry", () => {
    const testCase = "datatype_in_params_entry.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_snapshot_job_request", () => {
    const testCase = "datatype_in_snapshot_job_request.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_snapshot_setter", () => {
    const testCase = "datatype_in_snapshot_setter.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_structured_message", () => {
    const testCase = "datatype_in_structured_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_structured_message_param", () => {
    const testCase = "datatype_in_structured_message_param.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_template_job_creation", () => {
    const testCase = "datatype_in_template_job_creation.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("fail_with_different_version", () => {
    const testCase = "fail_with_different_version.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ignored_datatypes_only", () => {
    const testCase = "ok_ignored_datatypes_only.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})