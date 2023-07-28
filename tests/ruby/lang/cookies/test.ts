const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_signed_cookies", async () => {
    const testCase = "datatype_in_signed_cookies.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_object_in_cookie", async () => {
    const testCase = "datatype_object_in_cookie.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_encrypted_cookies", async () => {
    const testCase = "ok_encrypted_cookies.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})