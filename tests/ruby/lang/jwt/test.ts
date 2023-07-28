const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_jwt", async () => {
    const testCase = "datatype_in_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_object_in_jwt", async () => {
    const testCase = "datatype_object_in_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatypes_with_encrypted_jwt", async () => {
    const testCase = "datatypes_with_encrypted_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})