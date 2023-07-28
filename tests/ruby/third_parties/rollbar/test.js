const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_context", ({ expect }) => {
    const testCase = "datatype_in_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_log", ({ expect }) => {
    const testCase = "datatype_in_log.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_log_helper", ({ expect }) => {
    const testCase = "datatype_in_log_helper.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_scope", ({ expect }) => {
    const testCase = "datatype_in_scope.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_scoped", ({ expect }) => {
    const testCase = "datatype_in_scoped.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_datatype_ignored", ({ expect }) => {
    const testCase = "ok_datatype_ignored.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatype", ({ expect }) => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})