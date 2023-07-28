const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_record_exception", ({ expect }) => {
    const testCase = "datatype_in_record_exception.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_span_attributes", ({ expect }) => {
    const testCase = "datatype_in_span_attributes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_span_event", ({ expect }) => {
    const testCase = "datatype_in_span_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatypes_in_span_init_block", ({ expect }) => {
    const testCase = "datatypes_in_span_init_block.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})