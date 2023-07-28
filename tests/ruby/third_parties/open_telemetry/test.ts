const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_record_exception", async () => {
    const testCase = "datatype_in_record_exception.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_span_attributes", async () => {
    const testCase = "datatype_in_span_attributes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_span_event", async () => {
    const testCase = "datatype_in_span_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatypes_in_span_init_block", async () => {
    const testCase = "datatypes_in_span_init_block.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})