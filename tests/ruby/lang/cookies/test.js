const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_signed_cookies", () => {
    const testCase = "datatype_in_signed_cookies.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_object_in_cookie", () => {
    const testCase = "datatype_object_in_cookie.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_encrypted_cookies", () => {
    const testCase = "ok_encrypted_cookies.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})