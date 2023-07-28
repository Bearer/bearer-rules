const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_add_event", () => {
    const testCase = "datatype_in_add_event.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_record_exception", () => {
    const testCase = "datatype_in_record_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_attribute", () => {
    const testCase = "datatype_in_set_attribute.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_set_status", () => {
    const testCase = "datatype_in_set_status.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})