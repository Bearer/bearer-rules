const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_config", async () => {
    const testCase = "datatype_in_config.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_job_message", async () => {
    const testCase = "datatype_in_job_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_metadata", async () => {
    const testCase = "datatype_in_metadata.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_params_entry", async () => {
    const testCase = "datatype_in_params_entry.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_snapshot_job_request", async () => {
    const testCase = "datatype_in_snapshot_job_request.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_snapshot_setter", async () => {
    const testCase = "datatype_in_snapshot_setter.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_structured_message", async () => {
    const testCase = "datatype_in_structured_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_structured_message_param", async () => {
    const testCase = "datatype_in_structured_message_param.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_template_job_creation", async () => {
    const testCase = "datatype_in_template_job_creation.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("fail_with_different_version", async () => {
    const testCase = "fail_with_different_version.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ignored_datatypes_only", async () => {
    const testCase = "ok_ignored_datatypes_only.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})