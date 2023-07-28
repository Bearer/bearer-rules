const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_param_hash", ({ expect }) => {
    const testCase = "datatype_in_param_hash.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_params", ({ expect }) => {
    const testCase = "datatype_in_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes_in_params", ({ expect }) => {
    const testCase = "ok_no_datatypes_in_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})