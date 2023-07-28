const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_add_event", ({ expect }) => {
    const testCase = "datatype_in_add_event.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_record_exception", ({ expect }) => {
    const testCase = "datatype_in_record_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_set_attribute", ({ expect }) => {
    const testCase = "datatype_in_set_attribute.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_set_status", ({ expect }) => {
    const testCase = "datatype_in_set_status.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes", ({ expect }) => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})