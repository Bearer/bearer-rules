const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_jwt", ({ expect }) => {
    const testCase = "datatype_in_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_object_in_jwt", ({ expect }) => {
    const testCase = "datatype_object_in_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatypes_with_encrypted_jwt", ({ expect }) => {
    const testCase = "datatypes_with_encrypted_jwt.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes", ({ expect }) => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})