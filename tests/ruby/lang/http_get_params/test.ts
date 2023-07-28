const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_param_hash", async () => {
    const testCase = "datatype_in_param_hash.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_params", async () => {
    const testCase = "datatype_in_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes_in_params", async () => {
    const testCase = "ok_no_datatypes_in_params.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})