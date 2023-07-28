const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_breadcrumb", async () => {
    const testCase = "datatype_in_breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_capture_message", async () => {
    const testCase = "datatype_in_capture_message.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_init", async () => {
    const testCase = "datatype_in_init.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_context", async () => {
    const testCase = "datatype_in_set_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_extra", async () => {
    const testCase = "datatype_in_set_extra.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_extras", async () => {
    const testCase = "datatype_in_set_extras.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_tag", async () => {
    const testCase = "datatype_in_set_tag.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_tags", async () => {
    const testCase = "datatype_in_set_tags.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_set_user", async () => {
    const testCase = "datatype_in_set_user.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_datatype_ignored", async () => {
    const testCase = "ok_datatype_ignored.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatype", async () => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})