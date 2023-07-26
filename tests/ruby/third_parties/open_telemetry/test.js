const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_record_exception", () => {
    const testCase = "datatype_in_record_exception.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_span_attributes", () => {
    const testCase = "datatype_in_span_attributes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_span_event", () => {
    const testCase = "datatype_in_span_event.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatypes_in_span_init_block", () => {
    const testCase = "datatypes_in_span_init_block.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})